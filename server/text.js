const ex = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const result = require("./sql/result")
const bodyParser = require("body-parser");
const cors = require("cors");
const auMiddle = require('./middelware/authMiddel');
const port = process.env.PORT
const app = ex();
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.post("/register", result.register)
app.post("/login", result.login)
app.get('/', result.select)

app.use(auMiddle.isAuth)
app.post('/create_info', result.create_info)
app.post('/logout', result.logOut)
app.put('/update_info/:id', result.update_info)
app.get('/select_id/:name', result.select_id)
app.delete('/delete_info/:id', result.delete_info)

app.listen(port, () => {
    console.log("Listening on port: " + port)
})