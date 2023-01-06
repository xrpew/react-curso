import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('pruebas en <FistApp2/>', () => 
{
    const title = 'hola, soy Goku';
    const subtitle = 'soy un subTitle';


    test('debe de hacer match con el snapshot',()=>{
        const { container } = render(<FirstApp title={title}/>)
        expect (container).toMatchSnapshot();
})

    test('debe de mostrar el mensaje:" hola, soy Goku" ',()=>{
        
        render(<FirstApp title={ title }/>)
        expect( screen.getByText(title)).toBeTruthy()
        // screen.debug();
    })
    test('debe mostrar el título en h1',()=>{
        render(<FirstApp title={ title }/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );
    });
    test('debe de mostrar el subtitulo enviado por props',()=>{
        render(<FirstApp 
            title    = { title }
            subtitle = { subtitle }
    />
    );
    expect( screen.getAllByText(subtitle).length).toBe(2)
    })
})
