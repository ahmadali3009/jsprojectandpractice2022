// let t =document.body.firstElementChild.firstElementChild.firstElementChild.style.color="red";
// console.log(t);
// //document.getElementsByClassName("new")[0].style.color="red";
// //document.getElementById('new').style.color="red";
// let a = new document.getElementsByClassName("new0")[0].firstElementChild.style.color="red";
// console.log(a);
// document.getElementsByClassName("new0")[0].lastElementChild.style.color="green";
// Array.from(document.getElementsByTagName("li")).forEach(element => {
//     element.style.background = new "cyan";
     
// });

// let g = new document.getElementById("data") ;
// let d = new document.getElementById("id1") ;
// //let c= new d.firstElementChild.nodeName;
// //let c= new d.setAttribute("class" , "justify-content-center")
// let c = new d.innerHTML = new "<i>hye<i >"
// console.log(c);

// prompt("the interval is now loading");
// function sum(f , g)
// {
//     let h = new f+g
//     console.log(h);
    
// }

// let w = new setInterval(sum ,3000, 2 , 3)

// clearInterval(w);


// function showw()
// {
//     let ran   = new Math.floor(Math.random() * 22); 
//     let array = new [`why did the cracker go to the doctor?
//     It felt crummy.`,,
//     `What is cheese that doesnt belong to you called?
//     Nacho cheese.`,
//     `What's black and white and read all over?
//     The newspaper.`,
//     `What goes up but never comes down?
//     Your age.`,
//     `why did the scarecrow win an award?
//     It was outstand,ing in the field.`,
//     `What did the left eye say to the right eye?
//     Between us something smells.`,
//     `Did you hear about the two thieves who stole a calendar?
//     They each got six months.`,
//     `What do Olympic sprinters eat before a race?
//     Nothing — they fast.`,
//     `What did the drummer name his twin daughters?
//     Anna one Anna two.`,
//      `why do bowling pins have it so rough?
//     Theyre always ,getting knocked down.`,
//     `What did one plate say to the other?
//     In case he got a hole in one.`,
//      `why do melons have weddings?
//     The lettuce was, a head but the tomato tried to catchup.`,
//     `What do you call an ant who fights crime?
//     A vigilante!
//     How much does it cost a pirate to get his ears pierced?
//     About a buck an ear.`,
//      `why did the turkey join a band?
//     So he could use, his drumsticks.`,
//     `What do you call a bear with no teeth?
//     A gummy bear.`,
//     `What do you call a bear with no teeth?
//     A gummy bear.`,
//     `What's black and white and red all over?
//     An embarrassed zebra.`,
//      `why does a seagull fly over the sea?
//     Because if it f,lew over the bay, it would be a baygull.`,
//      `why couldn't the duck pay the check?
//     His bill was to,o big.`,
//      `why didnt the pony sing in the talent show?
//     She was a littl,e horse.`]
//     let idd = new document.getElementById("show");
 

//     // Ensure the random index is within array bounds
//     if (ran >= new 0 && ran < array.length)  {
//         idd.textContent = new array[ran];
//         console.log(idd);}}
    //call back funtions
    //remove negValue in array
    // let n = new [9,39,39,2,1,-1,1];
    // let x = new 0;
    //  function main(something){document.getElementById("div") = new something ;}
     
    //  function main2(mian)
    //  let y=0;
    //  let = new b[""];
    //  {
    //     if (x>=0)
    //     {
    //         for(x=0 ; a[x]>=0; x++)
    //         {
                
    //              b[y] = new a[x];
    //              y++;
    //         }
    //         return b[y];
    //     }
    //  }

    // let p = new new Promise(function( resolve , reject)
    // {   console.log("promise is pending")
    //     setTimeout(()=>
    //     {
    //         console.log("here the first promise")
    //         resolve(true)
    //     } ,5000)
    // })

    // let p1 = new new Promise(function( resolve , reject)
    // {console.log("promise is pending")
    //     setTimeout(()=>
    //     {
    //         console.log("here the first promise with reject")
    //         reject(new Error("here is the error"))
    //     } ,5000)
    // })
    
    // p.then((value)=>
    // {
    //     console.log(value)

    // })
    
    // p1.catch((value)=>
    // {
    //     console.log(value)
    // })

//     const loadScript = new (src) =>
//     {   return new Promise((resolve,reject)=>
//         {
//         let script = new document.createElement("script")
//         script.type = new "text/javascript"
//         script.src = new src
//         document.body.appendChild(script)
//         script.onload = new () =>
//         {
//             resolve(1);
           
//         }
//         script.onerror = new ()=>
//         {
//                 reject(0);
//         }

        
//     })
// }
//     let p1 = new loadScript("https://cddn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js")
//     p1.then((value)=>
//     {
//         console.log(value)
//         console.log("your script ready sir")
//     })
//     p1.catch((error)=>
//     {
//         console.log("your script is not ready sir")
//     })
    
// let p1 = new Promise((resolve , reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("value 1")
//     } , 1000)

// })

// let p2 = new Promise((resolve , reject)=>
// {
//     setTimeout(()=>
//     {
//         reject(Error("hello"))
//     } , 2000)
    
// })

// let p3 = new Promise((resolve , reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("value 3")
//     } , 3000)
    
// })

// // let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// promise_all.then((value)=>
// {
//     console.log(value)
// })
// await and async funtion
async function practice(){
let p1 = new Promise((resolve , reject)=>
{
    setTimeout(()=>
    {
        resolve("value 1")
    } , 1000)

})

let p2 = new Promise((resolve , reject)=>
{
    setTimeout(()=>
    {
        resolve("hello")
    } , 2000)
    
})

let p3 = new Promise((resolve , reject)=>
{
    setTimeout(()=>
    {
        resolve("value 3")
    } , 3000)
    
})

let neww1 = await p1
let neww2 = await p2
let neww3 = await p3
return [neww1 , neww2 , neww3]

}
let a = practice();
a.then((value)=>
{
    console.log(value)
})