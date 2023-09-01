import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="list">
      {todoList.map((item) => (
        <TodoListItem
          todoList={todoList}
          setTodoList={setTodoList}
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  );
}
