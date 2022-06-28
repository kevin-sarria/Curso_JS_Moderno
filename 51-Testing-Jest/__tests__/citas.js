import Citas from '../js/classes/Citas.js';

describe('Probar la clase de citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'asdfs',
            propietario: 'asfd',
            telefono: '1234567890',
            fecha: '10-10-2010',
            hora:'10:30',
            sintomas: 'asvdc'
        }

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();

    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'asdfs',
            propietario: 'asfd',
            telefono: '1234567890',
            fecha: '10-10-2010',
            hora:'10:30',
            sintomas: 'asvdc'
        }

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();

    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();

    });

});


