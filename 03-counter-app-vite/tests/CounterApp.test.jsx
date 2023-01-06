import { render, screen, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('probando el <CounterApp />',()=>{
    const Initialvalue = 10
    test('debe hacer match con el snapshot',()=>{
        const { container}= render(<CounterApp value={Initialvalue}/>)
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar el valor inicial de 100',()=>{
        render(<CounterApp value={100}/>)
        expect( screen.getByText('100')).toBeTruthy()

    });
    test('debe de incrementar con el botón +1',()=>{
        render(<CounterApp value={ Initialvalue } /> );
        fireEvent.click( screen.getByText('+1') )  
        expect( screen.getByText('11')).toBeTruthy() 
    });
    test('debe de decrementar con el botón -1',()=>{
        render(<CounterApp value={ Initialvalue } /> );
        fireEvent.click( screen.getByText('-1') )  
        expect( screen.getByText('9')).toBeTruthy() 
    });
    test('debe de funcionar botón Reset',()=>{
        render(<CounterApp value={ Initialvalue } /> );
        fireEvent.click( screen.getByText('+1') ) 
        fireEvent.click( screen.getByText('+1') )  
        fireEvent.click( screen.getByText('+1') )  
        fireEvent.click( screen.getByText('Reset') )  

        expect( screen.getByText(Initialvalue)).toBeTruthy() 
    });
})