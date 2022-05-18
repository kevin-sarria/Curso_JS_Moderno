'use strict'


const sym =  Symbol();
const sym2 = Symbol();

const nombre = Symbol();
const apellido = Symbol();

const persona = {}


// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Kevin';
persona[apellido] = 'Sarria';
persona.tipoCliente = 'Premiun';
persona.saldo = 500;




//console.log(persona[nombre]);


// Las propiedades que utiliza un symbol no son iterables
for(let i in persona) {
    //console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};



cliente[nombreCliente] = 'Pedro';

console.log(cliente[nombreCliente]);
console.log(nombreCliente);
