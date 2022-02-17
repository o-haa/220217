const mysql = require('mysql')

connection.connect((err)=>{ 
	if (err) throw err;
    console.log('open')

    connection.end()
})

connection.connect((err)=>{  //엄청난 콜백지옥 ㄲ
	if (err) throw err;
    console.log('open')
    
    connection.end()
})