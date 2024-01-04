const { hashedPassword, comparePassword } = require('../helper/auth')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

// error handler middleware
const errorHandler = (res, error) => {
    res.status(500).json({ error: 'internal server error' })
}

// all register user
const allUser = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json({
            status: "all register user successfully",
            user
        })
    } catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

// create register user
const registerUser = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body
        if (!name || !email || !mobile || !password) {
            return res.json({
                status: 'All fields is required'
            })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.json({
                status: 'User is already exist'
            })
        }

        // hashed password
        const hashPassword = await hashedPassword(password)
        // create new user
        const user = await User.create({ name, email, mobile, password: hashPassword })
        const  recruiterName = user.name 
        return res.status(200).json({
            status: 'new user register is done successfully ',
            user,
            recruiterName
        })
    } catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

// login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        // check all field required
        if (!email || !password) {
            return res.json({
                status: 'All field is required'
            })
        }

        // check user is exist or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                status: 'User is not register'
            })
        }

        // check the password
        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.json({
                status: 'password is not matched'
            })
        }

        // jwt token generate
        const recruiterName = user.name
        jwt.sign({ name: user.name, email: user.email, mobile: user.mobile, id: user._id }, process.env.JWTSecretKey, {}, (err, token) => {
            if (err) throw err
            return res.cookie('token', token).json({
                status:'Successful user login',
                user,
                recruiterName,
                token
            })
        })
    } catch (error) {
        return res.json({
            status: 'Fail',
            message: error.message
        })
    }
}

module.exports = { allUser, registerUser, loginUser }