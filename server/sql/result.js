const pool = require("../connect/connect");

const query = require('./query');

const select = (req, res) => {
  pool.query(query.select, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
    } else {
      console.log('Connected to PostgreSQL:', res.send(result.rows));
    }
  });
}

const create_info = (req, res) => {
  const { name, city } = req.body
  const { date } = req.body.date
  pool.query(query.create_info, [name, city, date], (err, result) => {
    if (err) throw err;
    res.status(200).send("Add successfully ")
  })
}
const delete_info = (req, res) => {
  const id = req.params.id
  pool.query(query.delete_info, [id], (err, result) => {
    if (result.rows.length)
      res.status(200).send("Delete Successfully!")
    else  
      res.send('Not found')
  })
}
const update_info = (req,res ) =>{
  const {name,city} =req.body
  const {date} =req.body.date
  const id = req.params.id
  pool.query(query.update_info,[name,city,date,id],(err,result)=>{
    if (err ) throw err;
    res.status(200).send("update successfully");
  })
}

module.exports = { select, create_info, delete_info ,update_info}