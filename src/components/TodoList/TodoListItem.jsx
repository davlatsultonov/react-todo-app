export default ({
                    todo,
                    editTodoHandler,
                    completeTodoHandler,
                    deleteTodoHandler,
                    doneEditHandler,
                    cancelEditHandler
                }) => {
    const {id, title, completed, editing} = todo;

    return <li
        key={id}
        className={`todo ${completed ? 'completed' : ''} ${editing === true ? 'editing' : ''}`}
    >
        <div className="view">
            <input className="toggle" type="checkbox" checked={completed} onChange={() => completeTodoHandler(id)}/>
            <label onDoubleClick={() => editTodoHandler(id)}>{title}</label>
            <button className="destroy" onClick={() => deleteTodoHandler(id)}></button>
        </div>
        <input
            style={{display: editing === true ? 'block' : 'none'}}
            className="edit"
            type="text"
            defaultValue={title}
            onBlur={(e) => doneEditHandler(e.target.value)}
            onKeyUp={(event) => {
                if (event.key === 'Enter') {
                    doneEditHandler(todo);
                } else if (event.key === 'Escape') {
                    cancelEditHandler(todo);
                }
            }}
        />
    </li>
}