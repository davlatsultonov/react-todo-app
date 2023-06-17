import FilterButton from "./FilterButton.jsx";

export default ({todosState, setTodosState}) => {
    function renderFilterButtons() {
        return ['', 'active', 'completed'].map((label, index) => <FilterButton
            key={label + index}
            label={label}
            todosState={todosState}
            onClick={() => setTodosState(label)}
        />)
    }

    return <ul className="filters">{ renderFilterButtons() }</ul>
}