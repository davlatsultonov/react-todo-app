export default ({label, todosState, onClick}) => {
    const transformFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

    return <li onClick={onClick}>
        <a
            href='#'
            className={todosState === label ? 'selected' : ''}>
            {label === '' ? 'All' : transformFirstLetter(label) }</a>
    </li>
}