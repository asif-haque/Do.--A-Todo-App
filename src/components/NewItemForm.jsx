import { useState } from "react";

export default function NewItemForm({ todoList, setTodoList }) {
  const [newItem, setNewItem] = useState(""); //to target the input value

  const handleAdd = (e) => {
    e.preventDefault(); // doesn't let the website to refresh after submit
    setTodoList([
      ...todoList,
      { name: newItem, id: crypto.randomUUID(), isCompleted: false },
    ]);
    setNewItem(""); // Clears the input area after add
  };
  return (
    <form action="" onSubmit={handleAdd}>
      <label htmlFor="add" className="header">
        New Item
      </label>
      <input
        type="text"
        id="add"
        placeholder="Type..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
