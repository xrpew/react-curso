import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas 07-deses-arr', () => { 
    test('debe retornar un string y numero',()=>{
        const [ letters, numbers] = retornaArreglo();
        expect( letters ).toBe( 'ABC' )
        expect( numbers ).toBe( 123 )



    })
 })