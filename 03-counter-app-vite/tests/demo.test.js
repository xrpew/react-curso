describe("Pruebas en <DemoComponent/>", () => {
  test("esta prueba no debe de fallar", () => {
    //1. inicialización
    const message1 = "Hola mundo";

    //2. Estímulo

    const message2 = message1.trim();

    //3. Observar comportamiento... esperado
    /* 
        expect( message1 ).toBe( message2 ) */
    expect(message1).toBe(message2);
  });
  test("esta prueba TAMPOCO debe de fallar", () => {
    //1. inicialización
    const message1 = "Hola mundo";

    //2. Estímulo

    const message2 = message1.trim();

    //3. Observar comportamiento... esperado
    /* 
        expect( message1 ).toBe( message2 ) */
    expect(message1).toBe(message1);
  });
  test("esta prueba nUNCA debe de fallar", () => {
    expect(3).toBe(3);
  });
});
