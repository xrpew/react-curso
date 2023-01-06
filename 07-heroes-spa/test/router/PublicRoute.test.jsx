import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"


describe('pruebas en <PublicRoute/>', () => {
  test('debe de mostrar el children si no esta autenticado ', () => {
    
const contextValue = {
    logged: false,
}
    render(
        <AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>ruta Publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
    )

    expect(screen.getByText('ruta Publica')).toBeTruthy()

  })
  test('debe de navegar si está autenticado ', () => {
    const contextValue = {
        logged: true,
        user:{
            name:'strider',
            id:'234r'
        }
    }
        render(
            <AuthContext.Provider value={contextValue}>
               <MemoryRouter initialEntries={['/login']}>      
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                 <h1>ruta Publica</h1>
                            </PublicRoute>}/>

                        <Route path='marvel' element={<h1>Página Marvel</h1>}/>
                    </Routes>    
               </MemoryRouter>
            </AuthContext.Provider>
        )

    expect(screen.getByText('Página Marvel')).toBeTruthy();

  })

  
})
