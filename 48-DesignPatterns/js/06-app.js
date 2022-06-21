
// Mixin Pattern
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);


const cliente = new Persona('Juan', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
