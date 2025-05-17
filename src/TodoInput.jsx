import Button from "./Button";

export default function TodoInput(props) {
  const { newTodo, setNewTodo, handleAddTodo } = props;

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full py-2 px-3 text-gray-700 border-1 border-gray-500"
      />
      <Button handleAddTodo={handleAddTodo} />
    </div>
  );
}