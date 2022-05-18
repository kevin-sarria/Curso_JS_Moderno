
// Imports
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tienesSaldo, Cliente } from "./cliente.js";
import { Empresa } from './empresa.js';

nuevaFuncion();

//console.log(mostrarInformacion('Kevin', 1000));
//console.log(tienesSaldo(1000));


const cliente = new Cliente('Kevin', 400);

console.log(cliente.mostrarInformacion());



const empresa = new Empresa('Sarria Dev', 100, 'Online');
console.log(empresa.mostrarInformacion());