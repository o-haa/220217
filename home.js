const mysql = require ('mysql')
const info = require ('./homeinfo')
require('dotenv').config()

const pool = mysql.createPool
pool.getConnection((err,conn)=>{
   if(!err){
       conn.query('select * from board', (err,result)=>{
           console.log(result)
           conn.release()
       })
   }
})
