import { mensaje } from './string';


 describe('Pruebas de Strings', () => {

    it( 'Debe de regresar un string', () =>{

        const respuesta = mensaje('Cristian');

        expect(typeof respuesta).toBe('string');
    } );


    it( 'Debe de retornar un saludo con el nombre enviado', () =>{

        const nombre = 'Cristian'
        const respuesta = mensaje(nombre);

        expect(respuesta ).toContain( nombre );
    } );

 });




// it('Debe de regresar un string');