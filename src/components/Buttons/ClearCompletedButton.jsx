import Button from "./Button.jsx";

export default ({show, onClick}) => <Button
    className="clear-completed"
    onClick={onClick}
    style={{ display: show ? 'block' : 'none' }}
>Clear completed</Button>