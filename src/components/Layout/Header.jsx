import MainTitle from "../MainTitle.jsx";
import AddTodoInput from "../AddTodoInput.jsx";

export default ({inputValue, todoInputValueChangeHandler, addTodoHandler}) => <header className="header">
    <MainTitle label={'todos'}/>
    <AddTodoInput
        inputValue={inputValue}
        todoInputValueChangeHandler={todoInputValueChangeHandler}
        addTodoHandler={addTodoHandler}
    />
</header>