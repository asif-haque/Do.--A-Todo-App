import { useState } from "react";

export default function NewItemForm({ todoList, setTodoList }) {
  const [newItem, setNewItem] = useState(""); //to target the input value

  //.trim() method removes white spaces from both end of the string. This is done while rendering/mapping
  const handleAdd = (e) => {
    e.preventDefault(); // doesn't let the website to refresh after submit
    if (newItem.trim() === "") {
      return alert("Please enter a task.");
    }
    setTodoList([
      ...todoList,
      { name: newItem.trim(), id: crypto.randomUUID(), isCompleted: false },
    ]);
    setNewItem(""); // Clears the input area after add
  };
  return (
    <form action="" onSubmit={handleAdd} className="new-item-form">
      <div className="form-row">
        <label htmlFor="add" className="header">
          New Item
        </label>
        <input
          type="text"
          id="add"
          placeholder="Type..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
