export default function TodoListItem({ todoList, setTodoList, item }) {
  function handleDelete(id) {
    setTodoList([...todoList].filter((item) => item.id !== id));
  }
  function handleCompleted(id, checked) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: checked };
        }
        return todo;
      })
    );
  }
  return (
    <li key={item.id} className={item.isCompleted && "completed"}>
      <input
        type="checkbox"
        id="li"
        checked={item.isCompleted}
        onChange={(e) => handleCompleted(item.id, e.target.checked)}
      />
      <label htmlFor="li">{item.name}</label>
      <button className="delete" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}
