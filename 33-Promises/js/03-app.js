


const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado con exito');
    }else {
        reject('No se pudo aplicar el descuento');
    }

} );



aplicarDescuento
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))





// Hay 3 valores posibles...
// Fulfilled - El promise se cumplio...
// Rejected - el promise no se cumplio...
// Pending - no se ha cumplido y tampoco ha sido rechazado...




