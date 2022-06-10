

// Variables

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');

// Event Listeners

btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    if( mesa === '' || hora === '' ) {
        
        return;
    }


}



