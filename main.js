function convertirData(){
// captura de valor registrado por el usuario en valor farenheit
let farenheit=document.getElementById('farenheit').value

// verificar si el usuario oprimio el boton, pero no habia un numero para la temperatura
if(farenheit==''){
    alert('El campo temperatura en Farenheit esta vacio')
} else{

// convertir el valor dado por el usuario a celsius
const celsius=(farenheit - 32)*5/9

// capturar el elemento temperatura que se mostrara en el termometro
let temperatura=document.getElementById('temperatura')
// llenar divide el tamano del div en 100 para calcular cuanto espacio ocupara cada grado celsius
let llenar=248/100*celsius
// si el valor es mas alto que 100, se ocupara todo el tamano del div temperatura
if(llenar>100){
    temperatura.style.height=`248px`
    temperatura.style.color="#fff" 
}
// Si el valor es mas bajo que 0, se colocara el valor en 0 y se cambiar el color de la fuente a negro
else if(llenar<0) {temperatura.style.height=`0px`
temperatura.style.color="#000"
// Se agrego un padding para separar un poco el rango 0 y el valor de la temperatura obtenida
document.getElementById('cero').style.padding='20px'
}
// Lo demas se llenara con el valor obtenido en la variable llenar
else{ temperatura.style.height=`${llenar}px`
temperatura.style.color="#fff"
}

// Se coloca en el termometro en el div temperatura, el valor de la temperatura en grados y con 1 solo decimal
temperatura.innerText=`${celsius.toFixed(1)}°`

// se captura y coloca en el div inferior el valor de la temperatura obtenida en celcius
let convertido=document.getElementById('convertido')
convertido.innerText=`${celsius.toFixed(1)}°`

// se vacea el input de temperatura en celcius
document.getElementById('farenheit').value=""
}
}

function resetData(){
    document.getElementById('temperatura').style.height='0px' 
    document.getElementById('farenheit').value=""
    document.getElementById('convertido').innerText=''
}

// Captura de evento click y llamada a funcion coqnvertir
const convert=document.getElementById('convert')
convert.addEventListener('click',convertirData)

const reset=document.getElementById('reset')
reset.addEventListener('click',resetData)

