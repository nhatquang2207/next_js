const ex = require('express')
const app = ex();
const dotenv = require('dotenv').config()
const result = require("./sql/result")
const bodyParser = require("body-parser");

const cors = require("cors");
const auMiddle = require('./middelware/authMiddel');
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.post("/register", result.register)
app.post("/login", result.login)

app.use(auMiddle.isAuth)
app.post('/create_info', result.create_info)
app.put('/update_info/:id', result.update_info)
app.delete('/delete_info/:id', result.delete_info)
app.get('/select_id/:name', result.select_id)
app.post('/logout', result.logout)
app.get('/', result.select)

app.listen(port, () => {
    console.log("Listening on port: " + port)
})