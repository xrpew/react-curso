import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en 11-Async-await', () => { 
    test('getImage debe retornar la URL de la imagen', async()=>{
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string')
    })
 })