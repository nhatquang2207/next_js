const pool = require("../connect/connect");
const crypto = require("crypto-js")
const dotenv = require('dotenv').config()
const query = require('./query');
const jwt = require('jsonwebtoken')
const secretKey = process.env.SESSION_TOKEN_SECRET
const accessKeyLife = { expiresIn: '7d' }
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

// const refreshKey = "refresh-token-token-token"
const select = async (req, res) => {
  const users = await prisma.product.findMany();
  if (users)
    res.status(200).send(users)
  else {
    console.error('Error executing query');
  }
}
const select_id = async (req, res) => {
  const user = req.params.name
  console.log(user)
  const userID = await prisma.product.findUnique({
    where: {
      name: user
    }
  })
  if (userID)
    res.status(200).json(userID)
  else {
    res.status(200).json("Not found user")
  }


}
const create_info = async (req, res) => {
  const { name, city, date } = req.body
  const expiresAt = new Date(date)

  const create = await prisma.product.create({
    data: {
      name: name,
      city: city,
      Date: expiresAt,
    }
  })
  console.log(create)
  if (create)
    res.status(200).json({ message: "Add successfully created!" })
  else {
    res.json("Unsuccessfully!")
  }

}
const delete_info = async (req, res) => {
  const id = parseInt(req.params.id)
  const deleteID = await prisma.product.delete({
    where: {
      id: id
    }
  })
  if (deleteID)
    res.status(200).json({ message: " Successfully " })
  else {
    res.json({ message: "Not found" })
  }

}
const update_info = async (req, res) => {
  const { name, city, date } = req.body
  const expiresAt = new Date(date)
  const id = parseInt(req.params.id)
  // pool.query(query.update_info, [name, city, date, id], (err, result) => {
  //   if (err) throw err;
  //   res.status(200).send("update successfully");
  // })
  const update = await prisma.product.update({
    where: {
      id: id
    },
    data: {
      name: name,
      city: city,
      Date: expiresAt,
    }

  })
  console.log(update)
  if (update)
    res.status(200).json({ message: " Successful Update!" })
  else {
    res.json({ message: " Unsuccessfully update, please try again." })
  }
}
const login = (req, res) => {
  const name = req.body.users
  const pass = crypto.MD5(req.body.pass).toString()
  pool.query(query.login, [name, pass], async (err, result) => {
    if (true) {
      const dataToke = [{
        id: result.rows[0].id,
      }]
      const token = jwt.sign({ data: dataToke }, secretKey, accessKeyLife);
      const newToken = await prisma.session.create({
        data: {
          token: token,
          userId: result.rows[0].id,
          expiresAt: new Date(36000)
        }
      })
      console.log(newToken)
      // res.cookie('token', token, {
      //   httpOnly: true,
      //   secure: false,
      //   path: "/", // 1 hour
      // })
      // res.setHeader('Authorization', `Bearer ${token}`);
      res.status(200).json({ token })
    }
    else
      res.status(201).send({ message: "Error users or password", type: false })
  })
}
const register = async (req, res) => {
  const { name, email, pass } = req.body
  try {
    const register = await prisma.user.create({
      data:
      {
        userName: name,
        email: email,
        password: pass
      }
    })
    res.status(200).send("Successfully registered user!")
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 'P2002' && error.meta?.target?.includes('userName')) {
      res.status(200).send(`Email ${name} is already registered.`);
    } else {
      res.status('Error creating user:', error);
    }
  }
  // if (register)
  //   res.status(200).send({ message: "Register Successfully!", type: true })
  // else
  //   res.send({ message: "Unsuccessful register ", type: false })
  // }
  // else
  //   res.status(200).send({ message: "User already exists!" })
}
const logOut = (req, res) => {
  //   req.session.destroy((err) => {
  //     if (err) {
  //       console.error('Failed to destroy session:', err);
  //       return res.status(500).json({ message: 'Failed to destroy session' });
  //     } else {
  //       (res.clearCookie('Token'),
  //       res.status(200).send({ message: "Log Out Successfully" }))

  // } 

  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).send({ message: "Log Out Successfully" })
};




module.exports = { select, select_id, create_info, delete_info, update_info, login, register, logout: logOut } 