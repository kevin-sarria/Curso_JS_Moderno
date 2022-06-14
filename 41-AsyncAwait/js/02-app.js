function descargarClientes() {
    return new Promise( (resolve, reject) => {
        const err = true;

        setTimeout(() => {
            if(!err) {
                resolve('El listado de clientes de descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);

    } );
}

// Async Await
async function ejecutar() {
    try {
        const respuesta = await descargarClientes();
        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();