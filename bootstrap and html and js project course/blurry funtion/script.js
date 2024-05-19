const bgimage = document.querySelector('.image-bg')
const textloads = document.querySelector('.textloads')
let load = 0
let int = setInterval(bluimage , 30)

function bluimage()
{
    load++
    if (load > 99 )
    {
        clearInterval(int)
    }
    textloads.innerText = `${load}%`
    textloads.style.opacity= scale(load , 0 ,100 , 1, 0 )
    bgimage.style.filter=`blur( ${scale(load, 0 , 100 , 30, 0)}px )`

}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers