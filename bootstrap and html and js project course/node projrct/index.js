var mysql = require ('mysql')
var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'eversole123@',
    database: 'sys'

});
mysqlConnection.connect((err) =>{
    if (!err)
    console.log('db connected');
    else
    console.log('not')
});