const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
    const token = req.header('authentication')

    if (!token) {
        return res.status(401).json({
            status: 'unAuthorized'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWTSecretKey)
        req.body.user = decoded.user
        next()
    } catch (error) {
        return res.status(401).json({
            status: 'unAuthorized'
        })
    }
}

module.exports = requireAuth