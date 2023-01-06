import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../../src/Hooks/useCounter"


describe('Pruebas en en useCounter', () => { 
   
    test('debe retornar los valores por defecto', ()=>{

       const { result } = renderHook( ()=> useCounter());
       const { counter, decrement, increment, reset } = result.current

       expect( counter ).toBe(10);
       expect( decrement ).toEqual( expect.any(Function));
       expect( increment ).toEqual( expect.any(Function));
       expect( reset ).toEqual( expect.any(Function));

    })
    test('should generar el counter con el valor de 100', () => { 
        
        const { result } = renderHook( ()=> useCounter(100));
        const { counter } = result.current
        expect( counter ).toBe(100);

    })
    test('should increment , decrement and restar, work', () => { 
        const { result } = renderHook(()=> useCounter(100))
        const { counter, decrement, increment, reset} = result.current

        act(()=>{
            increment();
        })
        expect( result.current.counter ).toBe(101)

        act(()=>{
            decrement();
        })
        expect( result.current.counter ).toBe(99)
        
        act(()=>{
            reset();
        })
        expect( result.current.counter ).toBe(100)
        
     })
})

