import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from '../../src/03-examples'
import { useCounter } from "../../src/Hooks/useCounter";
import { useFetch } from '../../src/Hooks/useFetch';


jest.mock('../../src/Hooks/useCounter');
jest.mock('../../src/Hooks/useFetch');

describe('pruebas enn MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        couter:1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('debe mostrar el componente por defecto',()=>{

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        

        
        render(<MultipleCustomHooks/>);
        
        
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button',{name:'Next Quote'});
        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un Quote',()=>{

        useFetch.mockReturnValue({
            data: [{author: 'Sergio', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>)
        // screen.debug()

        expect(screen.getByText('hola mundo') ).toBeTruthy();
        expect(screen.getByText('Sergio') ).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();


    })

    test('debe llamar la funcion de incrementar',()=>{

        useFetch.mockReturnValue({
            data: [{author: 'Sergio', quote: 'hola mundo'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button',{name:'Next Quote'});
        fireEvent.click( nextButton );
        expect( mockIncrement ).toHaveBeenCalled();



    });
 });