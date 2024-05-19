// let loadScript = async (src)=>
// { return new Promise((resolve , reject)=>{
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () => { resolve(src) }
//     document.head.append(script) 

// })

// }
// let prosimses = async () =>
// {
//    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js")
//    console.log(a)
// }

// prosimses()
let new1 = () =>{
return new Promise((resolve , reject)=>
{
    setTimeout(()=>
    {
        reject(new Error("after 3 seconds"))
    },3000)

})
}
let p1 = async () =>
{
    try
    {
        let c = await new1()
        console.log(c)
    }
    catch(err)
    {
        console.log(err)
    }

}
p1();
