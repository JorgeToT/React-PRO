import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

const initial_state: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      description: "Cenar",
      completed: false,
    },
    {
      id: "2",
      description: "Terminar el curso",
      completed: false,
    },
  ],
  completedTodos: 0,
  pendingTodos: 2,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, initial_state);

  const toggleTodo = (id: string) => {
    dispatch({
      type: "toggleTodo",
      payload: {
        id,
      },
    });
  };

  return <TodoContext.Provider value={{ todoState, toggleTodo }}>{children}</TodoContext.Provider>;
};
