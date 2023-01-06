import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en AppRouter', () => {

  test('should de mostrar el login si no está autenticado', () => {

    const contextValue = {
        logged:false
    }

    render(
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>

            </AuthContext.Provider>
        </MemoryRouter>
    )
    // screen.debug()
    expect(screen.getAllByText('Login').length).toBe(2)

  })
  test('should mostrar el componente de marvel si está autenticado', () => {
    const contextValue = {
        logged:true,
        user:{
            id:'234',
            name:'pedro N.'
        }
    }

    render(
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>

            </AuthContext.Provider>
        </MemoryRouter>
    )
    screen.debug()
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
})
  
  
})
