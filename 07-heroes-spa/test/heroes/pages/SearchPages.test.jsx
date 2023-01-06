import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"



const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockUseNavigate
}))




describe('pruebas en search pages', () => {


    beforeEach(()=>jest.clearAllMocks() );
  test('should mostrarse correctamente con valores por defecto', () => { 
    
    const { container } =render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
    )

        expect(container).toMatchSnapshot();

   })
   test('debe de mostrar a batman y el input con el valor de queri string', () => { 
    
    render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage/>
        </MemoryRouter>
    )

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')
        const img = screen.getByRole('img')
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')
              
   })

   test('debe de mostrar un error si no hay hero ( batman123 )',()=>{
    render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage/>
        </MemoryRouter>
    )

    expect(screen.getByText("There's no result with")).toBeTruthy()    

   });
   test('debe de llamar al navigate a la pantalla nueva',()=>{

    const inputValue = 'superman'
        render(
        <MemoryRouter initialEntries={['/search']}>
            <SearchPage/>
        </MemoryRouter>
        )
            const input = screen.getByRole('textbox');
            fireEvent.change(input, {target:{name:'searchText', value: inputValue}})

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`)
   })

})
