const ex = require('express')
const app = ex();
const port = 4000;
const result = require("./sql/result")
const bodyParser = require("body-parser");
const cors = require("cors")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())

app.get('/', result.select)
app.get('/select_id/:personid', result.select_id)
app.post('/create_info', result.create_info)
app.delete('/delete_info/:id', result.delete_info)
app.put('/update_info/:id', result.update_info)
app.post("/login", result.login)
app.post("/register", result.register)
app.listen(port, () => {
    console.log("listening on port " + port)
})