'use strict'


const weakset = new WeakSet();

const cliente = {
    nombre: 'Kevin Sarria',
    saldo: 100
}

const nombre = 'Hoals';

weakset.add(cliente);
weakset.add(nombre);


console.log(weakset);




