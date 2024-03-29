export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: Todo[];
  completedTodos: number;
  pendingTodos: number;
}
