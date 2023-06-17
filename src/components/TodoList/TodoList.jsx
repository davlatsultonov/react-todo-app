import TodoListItem from "./TodoListItem.jsx";

export default ({
                    todos,
                    todosState,
                    editTodoHandler,
                    completeTodoHandler,
                    deleteTodoHandler,
                    doneEditHandler,
                    cancelEditHandler
                }) => {
    const renderTasks = () => todos.filter(item => todosState === 'completed' ? item.completed : todosState === 'active' ? !item.completed : item)
        .map(todo => <TodoListItem
            key={todo.id}
            todo={todo}
            editTodoHandler={editTodoHandler}
            completeTodoHandler={completeTodoHandler}
            deleteTodoHandler={deleteTodoHandler}
            doneEditHandler={doneEditHandler}
            cancelEditHandler={cancelEditHandler}
        />);

    return <ul className="todo-list">{renderTasks()}</ul>;
}