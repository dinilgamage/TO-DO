const TodoItem = ({ todo }) => {
  const cardClass = `todo-card ${todo.completed ? 'completed' : ''}`;
  
  return (
    <div className={cardClass}>
      <input type="checkbox" className="custom-checkbox" checked={todo.completed} readOnly />
      <span>{todo.title}</span>
    </div>
  );
};

export default TodoItem;
