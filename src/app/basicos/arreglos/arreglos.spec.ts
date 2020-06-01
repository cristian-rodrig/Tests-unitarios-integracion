import { obtenerRobots } from "./arreglos"


xdescribe(' Pruebas de arreglos', () =>{

    it( ' Debe de retornar al menos 3 robots', () =>{
        const resp = obtenerRobots();
        const totalRobots= resp.length
        expect(resp.length).toBeGreaterThanOrEqual(totalRobots);
    });

    xit( 'El arreglo debe contener a Megaman y a Ultron', () =>{
        const resp = obtenerRobots();
        
        expect(resp).toContain('Megaman');
        expect(resp).toContain('Ultron');

    })
})