import ToggleAllButton from "../Buttons/ToggleAllButton.jsx";
import TodoList from "../TodoList/TodoList.jsx";

export default ({
                    allCompleted,
                    toggleAllTodosHandler,
                    todos,
                    todosState,
                    editTodoHandler,
                    completeTodoHandler,
                    deleteTodoHandler,
                    doneEditHandler,
                    cancelEditHandler
                }) => (<section className="main" style={{display: todos.length ? 'block' : 'none'}}>
    <ToggleAllButton
        allCompleted={allCompleted}
        toggleAllTodosHandler={toggleAllTodosHandler}
    />
    <TodoList
        todos={todos}
        todosState={todosState}
        editTodoHandler={editTodoHandler}
        completeTodoHandler={completeTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
        doneEditHandler={doneEditHandler}
        cancelEditHandler={cancelEditHandler}
    />
</section>);