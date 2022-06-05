
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {

    const url = 'https://picsum.photos/list';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarHTML(datos) )

}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach( dato => {
        const { author, post_url } = dato;

        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;

}











