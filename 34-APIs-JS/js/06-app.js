

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');


microfono.addEventListener('click', ejecutarSpeechAPI);


function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = () => {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = () => {
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    }

    recognition.onresult = (e) => {
        console.log(e.results);
    }




}








