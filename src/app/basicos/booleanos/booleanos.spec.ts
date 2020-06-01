import { usuarioLogueado } from './booleanos';


describe('Pruebas de booleanos', () =>{
    
    it(' Debe de retornar true si el usuario esta logueado', () =>{
        const resp = usuarioLogueado(true);
        expect(resp).toBeTrue();
    })
});