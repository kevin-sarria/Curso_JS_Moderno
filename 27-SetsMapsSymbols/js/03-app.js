'use strict'


const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premiun');
cliente.set('saldo', 3000);

//console.log(cliente);

//console.log(cliente.size);
//console.log(cliente.has('nombre'));
//console.log(cliente.get('nombre'));

cliente.delete('saldo');
console.log(cliente);

cliente.clear();
console.log(cliente);



