import { useState } from "react";

export default function TodoListItem({ todoList, setTodoList, item }) {
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(item.name);

  function handleDelete() {
    setTodoList([...todoList].filter((todo) => todo.id !== item.id));
  }
  function handleEdit() {
    // it will bring the input for editing
    setEdit(true);
  }
  function handleSave() {
    setEdit(false);
    setTodoList(
      todoList.map((todo) =>
        todo.id === item.id && editedValue.trim() !== ""
          ? { ...todo, name: editedValue }
          : todo
      )
    );
  }
  function handleCompleted(e) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, isCompleted: e.target.checked };
        }
        return todo;
      })
    );
  }
  // random id for every item
  const idForItem = crypto.randomUUID();
  return (
    <li className={item.isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        id={idForItem}
        checked={item.isCompleted}
        onChange={handleCompleted}
      />
      <label htmlFor={idForItem}>{item.name}</label>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      {/* Edit your task */}
      <button onClick={handleEdit}>Edit</button>
      {edit && (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button type="submit" onClick={handleSave}>
            Save
          </button>
        </form>
      )}
    </li>
  );
}
