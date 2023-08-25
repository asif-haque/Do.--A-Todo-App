import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  return (
    <ul>
      {props.todoList.map((item) => (
        <TodoListItem
          //   todoList={todoList}
          //   setTodoList={setTodoList}
          {...props}
          item={item}
        />
      ))}
    </ul>
  );
}
