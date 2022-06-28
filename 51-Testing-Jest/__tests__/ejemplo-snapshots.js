

const cliente = {
    nombre: 'Kevin Sarria',
    balance: 500,
    tipo: 'Premiun'
};

describe('Testing al cliente', () => {

    test('Es Kevin Sarria', () => {
        expect(cliente).toMatchSnapshot();
    });

});









