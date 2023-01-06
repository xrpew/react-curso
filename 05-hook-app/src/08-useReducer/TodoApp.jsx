import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../Hooks";

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    todosCount,
    pendingTodos,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small> pendientes: {pendingTodos} </small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
