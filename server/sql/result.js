const pool = require("../connect/connect");
const crypto = require("crypto-js")
const query = require('./query');

const select = (req, res) => {
  pool.query(query.select, (err, result) => { 
    if (err) {
      console.error('Error executing query', err);
    }
    else
      res.status(200).send(result.rows)

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
  const  date = req.body.date
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
    if (result.rows.length)
      res.status(200).send("1") 
    else
      res.status(200).send("0")

  })
}
const register = (req, res) => {
  const name = req.body.users
  const email = req.body.email

  const pass = crypto.MD5(req.body.pass).toString()
  pool.query(query.check_register, [name], (err, result) => {
    if (result.rows.length) {
      res.status(200).send("1")
    }
    else {
      pool.query(query.register, [name, email, pass], (err, result) => {
        if (err) throw err;
        res.status(200).send("register successfully!"+name)
      })
    }
  })

}

module.exports = { select, select_id, create_info, delete_info, update_info, login, register } 