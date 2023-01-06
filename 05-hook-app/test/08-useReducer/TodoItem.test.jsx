import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el <TodoItem/>', () => {

    const todo = {
        id:1,
        description: 'piedra del alma',
        done: false
    }
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach(()=> jest.clearAllMocks() );
    
    test('debe de mostar el todo Pendiente de completar', ()=>{

        render(
        <TodoItem 
            todos={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={onToggleTodoMock}/>);

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');
    
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
        expect( spanElement.className ).toContain('align-self-center')
        
    });

    test('debe mostrar el Todo completado', ()=>{

        todo.done = true

        render(
        <TodoItem 
            todos={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={onToggleTodoMock}/>);

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')
        
    });
    test('span debe de llamar el ToggleTodo cuando se hace click', ()=>{

        render(
        <TodoItem 
            todos={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={onToggleTodoMock}/>
            );
     
         
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement ) ;

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
    });
    test('El borrar debe llamar al Delete con el ID del todo', ()=>{

        render(
        <TodoItem 
            todos={ todo } 
            onDeleteTodo={ onDeleteTodoMock } 
            onToggleTodo={onToggleTodoMock}/>
            );
     
         
        const buttonDanger = screen.getByText('Borrar');
        fireEvent.click( buttonDanger );
        expect(  onDeleteTodoMock ).toHaveBeenCalledWith(todo.id)

    });

})
