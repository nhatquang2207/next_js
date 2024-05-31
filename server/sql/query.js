

const select = '  select * from Persons'
const select_id = '  select * from Persons where personid= $1'
const create_info = 'insert into persons (name,city,date) values ($1,$2,$3)'
const delete_info = 'delete from persons where personid= $1'
const update_info = 'update persons set name = $1,city=$2,date = $3 where personid= $4'
const register = 'insert into persons (users,email,pass) values ($1,$2,$3)'
const login = 'select * from login where users = $1 and pass =$2 '
module.exports = { select, select_id, create_info, update_info, delete_info, register,login }