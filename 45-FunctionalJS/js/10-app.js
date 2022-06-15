

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})


function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    );

}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info)
    );

}

const cliente = Cliente('Kevin', 'correo@correo.com', 'Codigo con Kevin');
cliente.mostrarNombre();
cliente.agregarEmail('Cliente@cliente.com');
cliente.mostrarEmail();


const empleado = Empleado('Pedro', 'example@correo.com', 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('Empleado@empleado.com');
empleado.mostrarEmail();



