import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('pruebas en <FistApp/>', () => 
{
//   test('debe hacer match con el snapshot',()=>{

//     const title = 'holaa';
//     const { container } = render(<FirstApp title={ title }/>)

//     expect( container ).toMatchSnapshot();
     
//   })
  test('debe de mostrar título en h1',()=>{
    const title = 'holaa';
    const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>)
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title)

    expect( getByTestId('test-title').innerHTML).toContain(title);

})
test('debe de mostrar subtítulo enviado por props',()=>{
    const title = 'holaa';
    const subtitle = 45;

    const { getAllByText } = render(
        <FirstApp 
            title={ title }
            subtitle={ subtitle }


    />)

    expect( getAllByText(subtitle).length ).toBe(2);

})
})
