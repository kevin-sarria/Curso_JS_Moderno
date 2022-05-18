

import { Cliente } from './cliente.js'


export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }


    mostrarInformacion() {
        return `tu nombre es: ${this.nombre} y tienes ahorrado: $${this.ahorro} y su categoria es: ${this.categoria}`;
    }

}







