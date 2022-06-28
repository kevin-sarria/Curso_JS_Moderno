


function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    venedido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: ${cantidad}`);
    }
}


function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }

}


// Crear objetos
const kevin = new Comprador('Kevin');
const camilo = new Comprador('Camilo');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// tenemos que registrarlos

subasta.registrar(kevin);
subasta.registrar(camilo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);



kevin.oferta(350, kevin);
camilo.oferta(450, camilo);
kevin.oferta(500, kevin);
camilo.oferta(700, camilo);

vendedor.venedido('camilo');
