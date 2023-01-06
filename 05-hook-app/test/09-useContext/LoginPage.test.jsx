import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en el LoginPage ', () => { 
    test('debe de mostrar el componente sin el usuario',()=>{
      
            render(

                <UserContext.Provider value={ {user:null} }>
                    <LoginPage />
                </UserContext.Provider>
            
            )

            const preTag = screen.getByLabelText('pre')
            expect(preTag.innerHTML).toBe('null')


    });

    test('should de llamar al setUser cuando se hace click', () => {

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={ { user:null, setUser: setUserMock } }>
                <LoginPage />
            </UserContext.Provider>
        )

        const buttShow = screen.getByRole('button')
        fireEvent.click( buttShow ) ;

        expect( setUserMock ).toHaveBeenCalledWith({id: 123, name:'ramon', email:'samon@mail.com'})

    })

 })