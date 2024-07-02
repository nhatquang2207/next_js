const dotenv = require('dotenv').config
const secretKey = process.env.SESSION_TOKEN_SECRET

const jwt = require('jsonwebtoken')
const isAuth = (req, res, next) => {

    const authHeader = req.headers['authentication']
    const cookie = req.headers
    const token = authHeader && authHeader.split(' ')[1];
    console.log(cookie)
    // if (token) {
    //     const decoded = jwt.verify(token, secretKey, (err, user) => {
    //         if (err) {
    //             console.log("Token verification error ", err)
    //             return res.sendStatus(403)
    //         } else {
    //             req.user = user
    //             console.log(decoded)
    //             next();
    //         }
    //     })

    // }
    // else
    //     return res.status(403).send({
    //         message: "Token not found"
    //     })
    next();


}
module.exports = { isAuth }
