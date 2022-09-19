function convertir(){
let farenheit=document.getElementById('farenheit').value
const celsius=(farenheit - 32)*5/9
console.log(celsius)
let temperatura=document.getElementById('temperatura')
temperatura.style.height=`${250/100*celsius}px`
temperatura.style.top=`${-celsius}px`
temperatura.innerText=`${celsius.toFixed(1)}°`
let convertido=document.getElementById('convertido')
convertido.innerText=`${celsius.toFixed(1)}°`

document.getElementById('farenheit').value=""

}

const button=document.getElementById('button')
button.addEventListener('click',convertir)