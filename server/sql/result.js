const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const secretKey = process.env.SESSION_TOKEN_SECRET
const accessKeyLife = { expiresIn: '10s' }
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { compareAsc, parseISO } = require('date-fns');
// const refreshKey = "refresh-token-token-token"
const select = async (req, res) => {
  const users = await prisma.product.findMany();
  if (users)
    res.status(200).json(users)
  else {
    console.error('Error executing query');
  }
}
const select_id = async (req, res) => {
  const user = req.params.name
  try {
    const userID = await prisma.product.findUnique({
      where: {
        name: user,
      }
    })
    if (userID)
      res.status(200).json(userID)
    else {
      res.status(200).json("Not found user")
    }
  } catch (error) {
    console.log(error.code)
  }
}
const create_info = async (req, res) => {
  const { name, city, date } = req.body
  const expiresAt = new Date(date)
  try {
    const create = await prisma.product.create({
      data: {
        name: name,
        city: city,
        Date: expiresAt,
      }
    })
    if (create)
      res.status(200).json({ message: "Add successfully created!" })
  } catch (error) {
    if (error.code === 'P2002')
      res.json({ message: `Name product ${name} already exists` })
  }

}
const delete_info = async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    if (product) {
      await prisma.product.delete({
        where: {
          id: id
        }
      })
      res.status(200).send({ message: "Successfully delete product" })
    }
    else {
      res.send({ message: "Not found product to delete" })
    }

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
const update_info = async (req, res) => {
  const { name, city, date } = req.body
  const expiresAt = new Date(date)
  const id = parseInt(req.params.id)
  try {
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
    if (update)
      res.status(200).json({ message: " Successful Update!" })
    else {
      res.json({ message: " Unsuccessfully update, please try again." })
    }
  } catch (error) {
    if (error.code === 'P2025')
      res.send({ message: "Not found product to update" })
  }
}
const login = async (req, res) => {
  const { users, pass } = req.body
  const loginResult = await prisma.user.findUnique({ where: { userName: users, password: pass } })
  if (loginResult) {
    const dataToken = {
      id: loginResult.id,
      name: loginResult.userName,
    }
    const token = jwt.sign({ data: dataToken }, secretKey, accessKeyLife);
    const createToken = await prisma.session.create({
      data: {
        token: token,
        userId: loginResult.id,
        expiresAt: new Date(Date.now() + 120000)
      }
    })
    res.status(200).send({ message: "LogIn successful!", type: true, token: token })
  }
  else
    res.send({ message: "LogIn failed!, Users or password incorrect ", type: false })

}
const register = async (req, res) => {
  const { users, email, pass } = req.body
  console.log(users, email, pass)
  try {
    const register = await prisma.user.create({
      data:
      {
        userName: users,
        email: email,
        password: pass
      }
    })
    res.status(200).send({ message: "Successfully registered user!", type: true })

  } catch (error) {
    // Handle duplicate email error
    if (error.code === 'P2002' && error.meta?.target?.includes('userName')) {
      res.status(200).send({ message: `User name ${users} is already registered.`, type: false });
    } else {
      res.status({ message: 'Error creating user:', error });
    }
  }
}
const logOut = async (req, res) => {
  const authHeader = req.headers['authentication']
  const token = authHeader && authHeader.split(' ')[1];
  try {
    const delete_cookie = await prisma.session.delete({ where: { token: token } })
    res.status(200).send({ message: "Successfully deleted session" })

  } catch (error) {
    console.log(error.code)
  }

};


const check_session = async (sessionToken) => {
  const check = await prisma.session.findUnique({ where: { token: sessionToken } })
  if (check) {
    // set utc time if you want to check timezone
    const date1 = new Date(Date.now())
    const date2 = check.expiresAt
    const result = compareAsc(date1, date2);
    if (result === 1) {
      await prisma.session.delete({ where: { token: sessionToken } })
      return false
    }
    return true
  }
  else return false
}
module.exports = { select, select_id, create_info, delete_info, update_info, login, register, logOut, check_session }

