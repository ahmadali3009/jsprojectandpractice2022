var express = require ("express")
var mysql = require ("mysql")
var app = express()
var connection = require(`./home`)
app.get('/', function(req,res)
{
res.send ('hey there!')
});
app.listen(3000, function(){
    console.log('app port 3000')
    connection.conect(function (err){
        if(err) throw err;
        console.log('connected')
    })
});
