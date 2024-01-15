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
            success:true,
            message: "all register user successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
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
                success: false,
                message: 'All fields is required'
            })
        }

        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.json({
                success: false,
                message: 'User is already exist'
            })
        }

        // hashed password
        const hashPassword = await hashedPassword(password)
        // create new user
        const user = await User.create({ name, email, mobile, password: hashPassword })
        return res.status(200).json({
            success: true,
            message: 'new user register is done successfully '
        })
    } catch (error) {
        return res.json({
            success: false,
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
                success: false,
                message: 'All field is required'
            })
        }

        // check user is exist or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                success: false,
                message: 'User is not register'
            })
        }

        // check the password
        const matchPassword = await comparePassword(password, user.password)
        if (!matchPassword) {
            return res.json({
                success: false,
                message: 'password is not matched'
            })
        }

        // jwt token generate
        const token = jwt.sign({ id: user._id }, process.env.JWTSecretKey, {})
        return res.status(200).json({
            success: true,
            message: 'Login Successfully',
            token
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

// authController
const authController = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.userId })
        user.password = undefined
        if (!user) {
            return res.status(200).json({
                success: false,
                message: 'user is not found'
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: 'auth controller is successfully',
                data: user
            })
        }
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: 'auth is fail'
        })
    }
}


module.exports = { allUser, registerUser, loginUser, authController }