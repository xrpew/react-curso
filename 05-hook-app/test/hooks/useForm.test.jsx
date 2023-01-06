import { render, renderHook, act } from "@testing-library/react"
import { useForm } from '../../src/Hooks/useForm'

describe('pruebas useForm', () => { 

    const initialForm = {
        name:'Sesssrgio',
        email:'sergio@goolge.com'
    }



   test('should regresar los valores por defecto', () => { 

        const { result } = renderHook (()=> useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });

    }) ;

    test('debe cambiar el nombre del formulario', ()=>{

        const newValue= 'Juan'
        const { result } = renderHook (()=> useForm(initialForm));
        const{ onInputChange} = result.current;

        act(()=>
            onInputChange({ target: { name:'name', value:newValue}})
        );
        
        expect(result.current.name).toBe(newValue);
        expect( result.current.formState.name).toBe(newValue)     
   
    });

    test('should  de realizar el reset del formulario', () => {
      
        const newValue= 'Juan'
        const { result } = renderHook (()=> useForm(initialForm));
        const{ onInputChange, onResetForm} = result.current;

        act(()=>{
            onInputChange({ target: { name:'name', value:newValue}});
            onResetForm();
}
        );

        expect(result.current.name).toBe(initialForm.name);
        expect( result.current.formState.name).toBe(initialForm.name) 


    })
    


})

