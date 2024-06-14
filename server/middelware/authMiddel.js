const dotenv = require('dotenv').config
const secretKey = process.env.secretKey
const result = require("../sql/result")
const jwt = require('jsonwebtoken')

// const verify =  result.verifyToken(token,secretKey); 
const isAuth = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (token) {
        const decoded = jwt.verify(token, secretKey)
        next();
    }
    else
        return res.status(403).send({
            message: " no find token"
        })
}
module.exports = { isAuth }
