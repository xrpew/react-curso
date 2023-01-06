import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en el todoReducer', () => {
    const initialState = [{
        id:1,
        description:'Demo todo',
        done: false,
    }]
  
  
    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState )
    

  });
  test('debe agregar un todo',()=>{

    const action = {
        type:'[TODO] Add Todo',
        payload:[{
            id:2,
            description:'Nuevo todo #2',
            done: false
        }]
    };

    const newState = todoReducer(initialState, action);
    expect( newState.length ).toBe( 2 )
    expect( newState ).toContain( action.payload )
  })

  test('debe eliminar un TODO',()=>{
   
    const action = {
        type:'[TODO] Remove Todo',
        payload: 1
    }
    const newState = todoReducer(initialState, action)
    expect( newState.length ).toBe( 0 )

  });
  test('debe realizar el toggle un TODO',()=>{
   
    const action = {
        type:'[TODO] Toggle Todo',
        payload: 1
    }
    const newState = todoReducer(initialState, action)
    expect( newState[0].done ).toBe( true )

    const newState2 = todoReducer( newState, action)
    expect( newState2[0].done ).toBe( false )
  });

});
