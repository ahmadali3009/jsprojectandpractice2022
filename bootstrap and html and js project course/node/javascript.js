
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


//Get all
app.get("/", (req, res) => {
    mysqlConnection.query('SELECT * FROM new_table', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
}); 
function insert(){
    let text = document.querySelector("text")
    let text1=document.querySelector("text-2")
    let age = 55
    
app.post("/", (req, res) => {
    
    
    let emp = req.body;
    mysqlConnection.query('insert into  new_table', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
}