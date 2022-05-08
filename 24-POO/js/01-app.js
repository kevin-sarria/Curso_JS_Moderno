'use strict'


class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }

}

const kevin = new Cliente('Kevin', 400);


console.log(Cliente.bienvenida());
console.log(kevin.mostrarInformacion());
console.log(kevin);





