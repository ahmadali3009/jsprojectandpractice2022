
const mysql = require("mysql");
const path = require ("path")
const express = require("express");
var app = express();
const hbs = require ("hbs")
const bodyparser = require('body-parser');

app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host : '127.0.0.1',
    user: 'root',
    port: 3366,
    password: 'eversole123@',
    database: 'ab'

});
mysqlConnection.connect((err) =>{
    if (!err)
    console.log('db connected');
    else
    console.log('not :'+ JSON.stringify (err , undefined , 2) );
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

const static_path = path.join(__dirname, "public/css");
console.log(static_path)
app.use(express.static(static_path));

app.set("view engine", "hbs");


app.get("/", (req , res) => 
{
    res.render("new1")
});

function add (){
app.post("/add", async (req, res) => {
    
    try 
    {
        console.log(req.body.ID);
        
    } 
    catch (error) {
        
    }
 
});
}