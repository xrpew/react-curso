import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1) 
    const {isLoading, data: todo } = useGetTodoQuery( todoId );

    const nextTodo = ()=>{
        setTodoId(todoId + 1 )
    }
    const previousTodo = ()=>{
        setTodoId(todoId - 1 )
    }

  return (
        <>
            <h1>Todos ----- RTK Queri</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'true' : 'false' }</h4>

            <pre>{JSON.stringify( todo )}</pre>

            <button
                onClick={previousTodo}>
                previous Todo
            </button>

            <button onClick={nextTodo}>
                next Todo
            </button>
            {/* <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Dome' : 'Pending'}</strong>
                        <br />{todo.title} 
                    </li>

                ) )}

            </ul> */}


        
        </>

    )
}
