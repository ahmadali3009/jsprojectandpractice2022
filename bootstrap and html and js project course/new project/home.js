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


function age()
{
    var ageIndays = prompt('what is your age.....');
    var agedays= (ageIndays-2021)*365;
    var h1 = document.createElement("h1");
    var textans = document.createTextNode("you are" + agedays + "old");
    h1.setAttribute('id','agedays')
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);

    console.log(agedays);
}

function reset()
{
    document.getElementById('agedays').remove(agedays);
}

function genrateCat()
{
    var image = document.createElement('Img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "C:/Users/HP/Desktop/new project/download.jpg";
    div.appendChild(image);
}
// challange 3
function rpc(yourChoice)
{
    console.log(yourChoice);
    var humanChoice , botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberofF(getrandomnum());
    console.log('computer choice : ', botChoice )

}

function getrandomnum()
{
    return Math.floor(Math.random()*3)
  
}

function numberofF(number)
{
    var rpc_game = ['rock1' , 'paper' , 'scissor '] [number];
    return rpc_game;
}
