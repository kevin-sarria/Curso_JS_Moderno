'use strict'


// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();


function eventListeners() {
    // Cuando el usuario agrega tweets
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento se carga
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();

    });

}








// Funciones

function agregarTweet(e) {
    e.preventDefault();

    // TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    if(tweet.length < 1) {
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj]

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();



}



// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenedor
    const contenido = document.querySelector('#contenido');

    contenido.appendChild(mensajeError);
    

    setTimeout(() => {
        mensajeError.remove();
    }, 3000)

}



// Muestra un listado de los tweets
function crearHTML() {
    
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            
            // Crear el boton de eliminar
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.innerText = 'X';

            // Añadir la funcion de eliminar
            btn.onclick = () => {
                borrarTweet(tweet.id);
            };
            
            // Crear el HTML
            const li = document.createElement('li');
            // Añadir el texto
            li.innerText = tweet.tweet;
            // Asignamos el boton de eliminar
            li.appendChild(btn);
            // Añadimos al listado de tweets vacios
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();

}

// Funcion para limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}


// Funcion para almacenar los tweets en localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}




