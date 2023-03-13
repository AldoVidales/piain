const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'sellermap'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connected');
});
  


connection.end();