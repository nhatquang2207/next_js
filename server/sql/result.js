const pool = require("../connect/connect");
const crypto = require("crypto-js")
const dotenv = require('dotenv').config()
const query = require('./query');
const jwt = require('jsonwebtoken')
const secretKey = process.env.secretKey
const accessKeyLife = { expiresIn: '1h' }
// const refreshKey = "refresh-token-token-token"
const select = (req, res) => {
  pool.query(query.select, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
    }
    else {
      res.status(200).send(result.rows)
      console.log(secretKey, accessKeyLife)
    }



  });
}
const select_id = (req, res) => {
  const id = req.params.personid
  pool.query(query.select_id, [id], (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows)
  })
}
const create_info = (req, res) => {
  const { name, city } = req.body
  const date = req.body.date
  pool.query(query.create_info, [name, city, date], (err, result) => {
    if (err) throw err;
    res.status(200).send("Add successfully ")
  })
}
const delete_info = (req, res) => {
  const id = req.params.id
  pool.query(query.delete_info, [id], (err, result) => {
    if (!result.rows.length)
      res.status(200).send("Delete Successfully!")
    else
      res.send('Not found')
  })
}
const update_info = (req, res) => {
  const { name, city } = req.body
  const date = req.body.date
  const id = req.params.id
  pool.query(query.update_info, [name, city, date, id], (err, result) => {
    if (err) throw err;
    res.status(200).send("update successfully");
  })
}
const login = (req, res) => {
  const name = req.body.users
  const pass = crypto.MD5(req.body.pass).toString()
  pool.query(query.login, [name, pass], (err, result) => {
    const auToken = req.headers["x-access-token"]

    if (result.rows.length) {
      const dataToke = [{
        name: result.rows[0].users,
        pass: result.rows[0].pass,
      }]
      const token = jwt.sign({ data: dataToke }, secretKey, accessKeyLife);
      const deCode = jwt.verify(token, secretKey)
      res.status(200).send({ data: result.rows, message: "Login successfully", type: true, token: token })
      console.log(token)
    }
    else
      res.status(200).send({ message: "Error users or password", type: false })

  })
}
const register = (req, res) => {
  const name = req.body.users
  const email = req.body.email

  const pass = crypto.MD5(req.body.pass).toString()
  pool.query(query.check_register, [name], (err, result) => {
    if (result.rows.length) {
      res.status(200).send({ message: "User already exists!", type: false })
    }
    else {
      pool.query(query.register, [name, email, pass], (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: "Register Successfully!", type: true })
      })
    }
  })

}




module.exports = { select, select_id, create_info, delete_info, update_info, login, register, } 