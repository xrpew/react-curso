import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext, authReducer } from "../../../src/auth"
import { Navbar } from "../../../src/UI"


const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockUseNavigate
}))

describe('pruebas en el Navbar>', () => { 
    const name= 'Pedro Nail'
    const contextValue = {
        logged:true,
        user:{
            name
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks());


    test('debe de mostrar el nombre de usuario',()=>{

    
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter >
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect(screen.getByText(name)).toBeTruthy();
    })
    test('should llamar al logout y navigate cuando se hace click en el botón', () => { 
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter >
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

            const logoutBtn = screen.getByRole('button');
            fireEvent.click(logoutBtn);

            expect(contextValue.logout).toHaveBeenCalled()
            expect( mockUseNavigate ).toHaveBeenCalledWith('/login',{'replace':true})

     })
})
