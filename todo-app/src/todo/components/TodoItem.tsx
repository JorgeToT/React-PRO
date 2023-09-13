import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo } = useTodos();

  return (
    <li
      onClick={() => toggleTodo && toggleTodo(todo.id)}
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
    >
      {todo.description}
    </li>
  );
};
