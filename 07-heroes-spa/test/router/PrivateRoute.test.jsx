import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en el <PrivateRoute", () => {
  test("should mostrar el children si está autenticado", () => {


    Storage.prototype.setItem = jest.fn();


    const contextValue = {
      logged: true,
      user: {
        id: "234",
        name: "pedro N.",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath","/search?q=batman")
    expect(screen.getByText("Ruta Privada")).toBeTruthy();
  });
});
