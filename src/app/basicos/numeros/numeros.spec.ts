import { incrementar } from './numeros';


describe('Pruebas de numeros', () => {

    it( 'Debe de retornar 100, si el nro ingresado es mayor a 100', () =>{

      const resp = incrementar(300);
      expect ( resp ).toBe(100);
    });

    it( 'Debe de retornar en numero +1, si el nro ingresado es menor a 100', () =>{

        const resp = incrementar(50);
        expect ( resp ).toBe(51);
      });
    
});