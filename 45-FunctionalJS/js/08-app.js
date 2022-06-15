

const obtenerCliente = () => {
    const nombre = 'Kevin';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre();

}

const cliente = obtenerCliente();


cliente();




