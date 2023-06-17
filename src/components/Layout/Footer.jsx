import RemainingItemsIndicator from "../RemainingItemsIndicator.jsx";
import FilterButtons from "../FilterButtons/FilterButtons.jsx";
import ClearCompletedButton from "../Buttons/ClearCompletedButton.jsx";

export default ({todos, remaining, clearCompletedTodoHandler, todosState, setTodosState}) => <footer className="footer" style={{ display: todos.length ? 'block' : 'none' }}>
    <RemainingItemsIndicator remainingItems={remaining} />
    <FilterButtons todosState={todosState} setTodosState={setTodosState} />
    <ClearCompletedButton
        onClick={clearCompletedTodoHandler}
        show={todos.length > remaining}
    />
</footer>