const dotenv = require('dotenv').config
const secretKey = process.env.secretKey
const result = require("../sql/result")
const express = require('express');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const app = express();
const isAuth = (req, res, next) => {
    // const token = req.headers.token
    // const token = req.headers.token;
    console.log("qa")
    // if (token) {
    //     const decoded = jwt.verify(token, secretKey)
    //     next();
    // }
    // else
    //     return res.status(403).send({
    //         message: " no find token"
    //     })
    next()
}
module.exports = { isAuth }
