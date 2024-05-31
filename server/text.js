const ex = require('express')
const app = ex();
const port = 4000;
const result = require("./sql/result")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', result.select)
app.post('/create_info', result.create_info)
app.delete('/delete_info/:id',result.delete_info)
app.put('/update_info/:id',result.update_info)
app.listen(port, () => {
    console.log("listening on port " + port  )
})