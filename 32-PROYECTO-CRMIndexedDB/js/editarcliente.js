(function () {

    let DB;
    const nombreInput = document.querySelector('#nombre');

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB();

        // Verificar los datos de la url
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parametrosURL.get('id');

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);
        }

    });



    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = (e) => {
            const cursor = e.target.result;

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }

                cursor.continue();

            }

        }

    }



    function llenarFormulario(datoscliente) {
        const { nombre } = datoscliente;

        nombreInput.value = nombre;

    }



    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;
        }
    }

})();