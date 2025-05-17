export default function Button(props) {
  const { handleAddTodo } = props;

  //  const { handleAddTodo } = global;
  return <button onClick={handleAddTodo}>추가</button>;
}
