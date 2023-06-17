export default ({remainingItems}) => <span className="todo-count">
  <b>{remainingItems}</b>
  <span>{remainingItems === 1 ? ' item' : ' items'} left</span>
</span>