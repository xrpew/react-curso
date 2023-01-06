import { render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('pruebas en HomePage', () => {

    test('debe mostrar el copmponente sin el usuario',()=>{
        
        render(

            <UserContext.Provider value={ {user:null} }>
                <HomePage />
            </UserContext.Provider>
        
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    });
    test('debe mostrar el copmponente CON el usuario',()=>{
        
        const user = {id:2, name:'sergio'}

        render(

            <UserContext.Provider value={ { user } }>
                <HomePage />
            </UserContext.Provider>
        
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(user.id.toString())


    });
  
})
