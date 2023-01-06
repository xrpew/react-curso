import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retoranar un heroe por ID',()=>{
        const id = 1;
        const hero = getHeroeById( id )

        expect( hero ).toEqual({ id: 1,
            name: 'Batman', owner: 'DC' })
    })
    test('getHeroeById debe retoranar undefined',()=>{
        const id = 100;
        const hero = getHeroeById( id )
        console.log(hero)
        /* expect( hero ).toEqual( undefined ) 
        expect( hero ).toBeFalsy() */
        expect( hero ).toBe(undefined)
    })

    test('filtrar heroes por OWNER DC',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner )
        console.log( heroes.length )
        expect( heroes.length ).toBe(3)
        expect( heroes ).toEqual(heroes.filter((heroe)=>heroe.owner === owner))
    });
    test('filtrar heroes por OWNER marvel',()=>{
        const owner = 'Marvel';
        const heroeX = getHeroesByOwner( owner )
        console.log( heroeX.length )
        expect( heroeX.length ).toBe(2)
        expect( heroeX ).toEqual(heroes.filter((heroe)=>heroe.owner===owner))
    })
 })