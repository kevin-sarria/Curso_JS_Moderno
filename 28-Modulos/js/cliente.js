

export const nombreCliente = 'Kevin';
export const ahorro = 200;


export function mostrarInformacion(nombre, ahorro) {
    return `tu nombre es: ${nombre} y tienes ahorrado: $${ahorro}`;
}


export function tienesSaldo(ahorro) {
    if(ahorro > 0) {
        return 'Si tienes saldo';
    }else {
        return 'No tienes saldo';
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `tu nombre es: ${this.nombre} y tienes ahorrado: $${this.ahorro}`;
    }

}


export default function nuevaFuncion() {
    console.log('Este es el export default');
}


