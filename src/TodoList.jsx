export default function TodoList(props) {
  const { todos, toggleComplete, handleDeleteTodo } = props;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onClick={() => toggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        );
      })}
    </ul>
  );
}