

// Variables

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');



// Event Listeners

btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );

    if(camposVacios) {
        
        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);

        }

        return;

    }

    // Asignar datos del formulario al cliente
    cliente = { ...cliente, mesa, hora };

    // Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();


    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON-Server
    obtenerPlatillos();


}


function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach( seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarPlatillos(resultado) )
        .catch( err => console.error(err) )

}


function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido');
    
    platillos.forEach( platillo => {

        const { id, nombre, precio, categoria } = platillo;

        const row = document.createElement('div');
        row.classList.add('row', 'py-3', 'border-top');
        
        const name = document.createElement('div');
        name.classList.add('col-md-4');
        name.textContent = nombre;

        const price = document.createElement('div');
        price.classList.add('col-md-3', 'fw-bold');
        price.textContent = `$${precio}`;

        const category = document.createElement('div');
        category.classList.add('col-md-3');
        category.textContent = categorias[categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');

        // Funcion que detecta la cantidad y el platillo que se esta agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);

            agregarPlatilo({...platillo, cantidad});
        }

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);


        row.appendChild(name);
        row.appendChild(price);
        row.appendChild(category);
        row.appendChild(agregar);

        contenido.appendChild(row);

    } )


}

function agregarPlatilo(producto) {
    
    const { cantidad } = producto;


    // Extraer el pedido actual
    let { pedido } = cliente;

    // Revisar que la cantidad sea mayor a 0
    if( cantidad > 0 ) {
        
        // Comprueba si un elemento ya existe en el array

        if(pedido.some( articulo => articulo.id === producto.id )) {
            // El articulo ya existe, Actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if( articulo.id === producto.id ) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            } );
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];

        }else {
            // El articulo no existe, lo agregamos al array de pedido
            cliente.pedido = [...pedido, producto]
        }
        
    } else {
        // Eliminar elementos cuando la cantidad sea 0
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];


    }

    // Limpiar el HTML previo
    limpiarHTML();


    if(cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();
    }else {
        mensajePedidoVacio();
    }

    

}


function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Infornación de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');


    // Información de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');



    // Agregar a los elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);


    // Titulo de la seccion
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos Consumidos'
    heading.classList.add('my-4', 'text-center');


    // Iterar sobre el array de pedidos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const { pedido } = cliente;
    pedido.forEach( articulo => {
        const { nombre, cantidad, precio, id } = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');
        

        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        // Cantidad del articulo
        const cantidadEl = document.createElement('p');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        
        const cantidadValor = document.createElement('span');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        // Precio del articulo
        const precioEl = document.createElement('p');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        
        const precioValor = document.createElement('span');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;


        // Subtotal del articulo
        const subTotalEl = document.createElement('p');
        subTotalEl.classList.add('fw-bold');
        subTotalEl.textContent = 'SubTotal: ';

        
        const subTotalValor = document.createElement('span');
        subTotalValor.classList.add('fw-normal');
        subTotalValor.textContent = calcularSubTotal(precio, cantidad);


        // Boton para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';

        btnEliminar.onclick = function() {
            eliminarProducto(id)
        };


        // Agregar valores a sus contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subTotalEl.appendChild(subTotalValor);


        // Agregar elementos al LI
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subTotalEl);
        lista.appendChild(btnEliminar);

        // Agregar lista al grupo principal
        grupo.appendChild(lista);


    } );


    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);


    // Mostrar Formulario de propinas
    formularioPropinas();


}

function limpiarHTML() {
    
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubTotal(precio, cantidad) {
    return `$${precio * cantidad}`;
}

function eliminarProducto(id) {

    const { pedido } = cliente;

    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    // Limpiar el HTML previo
    limpiarHTML();

    if(cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();
    }else {
        mensajePedidoVacio();
    }

    // El producto se elimino por lo tanto regresamos la cantidad a 0 en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;

}


function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elemento del pedido';

    contenido.appendChild(texto);

}

function formularioPropinas() {
    
    const contenido = document.querySelector('#resumen .contenido');
    
    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card', 'py-5', 'px-3', 'shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Propina';


    // Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div')
    radio10Div.classList.add('form-check');



    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);



    // Radio button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div')
    radio25Div.classList.add('form-check');



    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);



     // Radio button 50%
     const radio50 = document.createElement('input');
     radio50.type = 'radio';
     radio50.name = 'propina';
     radio50.value = "50";
     radio50.classList.add('form-check-input');
     radio50.onclick = calcularPropina;
 
     const radio50Label = document.createElement('label');
     radio50Label.textContent = '50%';
     radio50Label.classList.add('form-check-label');
 
     const radio50Div = document.createElement('div')
     radio50Div.classList.add('form-check');
 
 
 
     radio50Div.appendChild(radio50);
     radio50Div.appendChild(radio50Label);


    // Agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    // Agregar al Formulario
    formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);

    


}


function calcularPropina() {
    
    const { pedido } = cliente;
    let subTotal = 0;


    // Calcular el subtotal a pagar
    pedido.forEach( articulo => {
        subTotal += articulo.cantidad * articulo.precio;
    });


    // Seleccionar el radio button con la propina del cliente
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    // Calcular la propina
    const propina = ((subTotal * parseInt(propinaSeleccionada)) / 100 )


    // Calcular el total a pagar
    const total = subTotal + propina;

    mostrarTotalHTML(subTotal, total, propina);

}

function mostrarTotalHTML(subtotal, total, propina) {


    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar', 'my-5');

    // Subtotal
    const subTotalParrafo = document.createElement('p');
    subTotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subTotalParrafo.textContent = 'Subtotal Consumo: ';

    const subTotalSpan = document.createElement('span');
    subTotalSpan.classList.add('fw-normal');
    subTotalSpan.textContent = `$${subtotal}`;

    // propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina Consumo: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;


    // Total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'Total Consumo: ';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;


    subTotalParrafo.appendChild(subTotalSpan);
    propinaParrafo.appendChild(propinaSpan);
    totalParrafo.appendChild(totalSpan);

    // Eliminar el HTML previo
    const totalPagarDiv = document.querySelector('.total-pagar');

    if(totalPagarDiv) {
        totalPagarDiv.remove();
    }

    divTotales.appendChild(subTotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div');

    formulario.appendChild(divTotales);

}
