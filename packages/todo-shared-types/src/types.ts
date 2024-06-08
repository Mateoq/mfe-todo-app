export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export enum TodoFilter {
  ALL = 'todo_all',
  ACTIVE = 'todo_active',
  COMPLETED = 'todo_completed',
}

export interface TodoStatusProps {
  todos: Todo[];
  filter: TodoFilter;
  toggleTodo(id: number): void;
  setFilter(filter: TodoFilter): void;
}

export interface TodoCreationProps {
  addTodo(data: Todo): void;
}
