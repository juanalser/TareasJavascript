const formulario = document.querySelector('#formulario');
console.log(formulario)

//funciones
function eventoSubmit(eve){
eve.preventDefault();


const inputs = eve.target.elements
const contenido = inputs["Contenido"].value
const altura = inputs["anchura"].value;
const anchura = inputs["anchura"].value;
console.log(altura)

const caja = document.querySelector('#cajita');
caja.textContent = contenido;
caja.style.width = anchura + "px";
caja.style.height = altura + "px";
}


//Listener
formulario.addEventListener("submit", eventoSubmit)