
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instalo correctamente... ', registrado) )
        .catch( err => console.log('Falló la instalación... ', err) )
}else {
    console.log('Service Workers no Soportado');
}





