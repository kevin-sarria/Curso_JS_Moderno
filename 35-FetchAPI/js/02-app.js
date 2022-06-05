
const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleado.json')
        .then( response => {
            console.log(response);

            return response.json();

        } )

        .then( datos => {
            mostrarResultado(datos);
        } )
}


function mostrarResultado( { empresa, id, nombre, trabajo } ) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `
}






