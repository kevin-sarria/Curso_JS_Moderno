'use strict'

// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}



// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles al cargar

    // Llena las opciones de años
    llenarSelect();

});



// Funciones
function mostrarAutos() {
    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} ${year} - ${year} - ${puertas} Puertas- Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);

    })
}


// Genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion ); // Agrega las opciones de año al select
    }
}




















