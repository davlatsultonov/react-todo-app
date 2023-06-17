export default ({allCompleted, toggleAllTodosHandler}) => (<>
    <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={toggleAllTodosHandler}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
</>)