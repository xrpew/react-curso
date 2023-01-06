import { getSaludo }from "../../src/base-pruebas/02-template-string"

describe('pruebas en 02template-string', () => { 
    
    test('getSaludo debe retornar "hola Sergio"',()=>{

        const name = 'Sergio'
        const message = getSaludo( name );


        expect( message ).toBe(`Hola ${ name }`)
    })
 }) 