'use strict'


class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}


const kevin = new Cliente();
kevin.setNombre('Kevin');
console.log(kevin.getNombre());





