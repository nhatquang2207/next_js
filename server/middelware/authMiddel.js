const dotenv = require('dotenv').config
const secretKey = process.env.SESSION_TOKEN_SECRET
const ex = require('express')
const app = ex();
const cookieParser = require('cookie-parser');
const result = require('../sql/result')
const jwt = require('jsonwebtoken')
app.use(cookieParser)
const isAuth = async (req, res, next) => {
    //headers authentication token
    const authHeader = req.headers['authentication']
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
        const check = await result.check_session(token)
        try {
            if (check) {
                next();
            }
            else{
                res.json({message:"You are not allowed to edit"})
            }
        } catch (error) {
            return res.status(404).json({ message: 'Failed to authenticate token' });

        }
    }
    else {
        res.status(404).json({message : "Not found token"})
    }

}
// if (token) {
//     const check = await result.check_session(token)
//     if (check) {
//         next();
//     }
//     else {
//         //  res.status(404).json({ message: "Token not valid" })
//          res.json({ message: 'SessionToken not found' });
//      }
// } else {
//     res.json({ message: 'SessionToken not found' });
// }


module.exports = { isAuth }
