import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/Hooks/useTodo'


jest.mock('../../src/Hooks/useTodo')


describe('Pruebas en el TodoApp', () => {

    useTodo.mockReturnValue({
        todos:[
            {id:1, description: 'todo #1', done: false},
            {id:2, description: 'todo #2', done: true}
        ],
        todosCount: 2,
        pendingTodos:1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
    });



  test('debe de mostrar el comoponente correctamente ', ()=>{

        render( <TodoApp /> );

        expect( screen.getByText('todo #1')).toBeTruthy();
        expect( screen.getByText('todo #2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();
  });

  
});
