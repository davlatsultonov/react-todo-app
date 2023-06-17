import {useEffect, useState} from 'react'
import './App.css'
import MainContent from "./components/Layout/MainContent.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Header from "./components/Layout/Header.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [todosState, setTodosState] = useState('');
    const [allCompleted, setAllCompleted] = useState(false);
    const remaining = todos.filter(item => !item.completed).length;

    useEffect(() => {
        setAllCompleted(!(todos.some(item => !item.completed)));
    }, [todos])

    return (
        <section className="todoapp">
            <Header
                inputValue={inputValue}
                todoInputValueChangeHandler={todoInputValueChangeHandler}
                addTodoHandler={addTodoHandler}
            />
            <MainContent
                todos={todos}
                todosState={todosState}
                editTodoHandler={editTodoHandler}
                completeTodoHandler={completeTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
                doneEditHandler={doneEditHandler}
                cancelEditHandler={cancelEditHandler}
                allCompleted={allCompleted}
                toggleAllTodosHandler={toggleAllTodosHandler}
            />
            <Footer
                clearCompletedTodoHandler={clearCompletedTodoHandler}
                todos={todos}
                setTodosState={setTodosState}
                remaining={remaining}
            />
        </section>
    )

    function todoInputValueChangeHandler(value) {
        setInputValue(value)
    }

    function addTodoHandler() {
        if (!inputValue) return;

        const todo = {
            id: new Date().getTime(),
            title: inputValue,
            completed: false,
        }

        setTodos([...todos, todo]);
        setInputValue('');
    }

    function completeTodoHandler(id) {
        const updatedTasks = todos.map(item => {
            return item.id === id ? {
                ...item, completed: !item.completed,
            } : item
        })

        setTodos(updatedTasks);
    }

    function deleteTodoHandler(id) {
        setTodos([...todos.filter(item => item.id !== id)]);
    }

    function clearCompletedTodoHandler() {
        setTodos([...todos.filter(item => !item.completed)]);
        setTodosState('');
        setAllCompleted(false);
    }

    function editTodoHandler(id) {
        setTodos([...todos.map(item => {
            if (item.id === id) {
                return {
                    ...item, editing: true
                }
            }

            return item;
        })])
    }

    function doneEditHandler(value) {
        setTodos([...todos.map(({id, title, completed, editing}) => {
            if (editing) {
                return {id, title: value, completed}
            }
            return {id, title, completed};
        })])
    }

    function cancelEditHandler() {
        setTodos([...todos.map(({id, title, completed}) => {
            return {id, title, completed};
        })])
    }

    function toggleAllTodosHandler() {
        setTodos([...todos.map(item => ({...item, completed: !allCompleted}))])
        setAllCompleted(!allCompleted);
    }
}

export default App
