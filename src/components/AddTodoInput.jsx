export default ({inputValue, todoInputValueChangeHandler, addTodoHandler}) => <input
    className="new-todo"
    autoFocus
    placeholder="What needs to be done?"
    value={inputValue}
    onChange={(e) => todoInputValueChangeHandler(e.target.value)}
    onKeyUp={(event) => {
        if (event.key === 'Enter') {
            addTodoHandler();
        }
    }}
/>;