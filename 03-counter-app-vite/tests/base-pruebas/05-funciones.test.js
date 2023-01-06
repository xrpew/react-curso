import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => { 
    test('getUser debe restornar un objeto', ()=>{
        const testUser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        expect( testUser ).toEqual( user )
    });

    test('getUsuarioActivo debe retornar un objeto',()=>{
        const name = 'Sergio';
        const user = getUsuarioActivo( name );

        const testTed = {
            uid:'ABC567',
            username: name
        }
        expect( user ).toEqual(testTed)

    })
 })