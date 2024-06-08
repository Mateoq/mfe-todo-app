declare module 'todoStatus/TodoStatus' {
  import React from 'react';
  import { TodoStatusProps } from 'todo-shared-types';

  export const TodoStatus: React.FC<TodoStatusProps>;
}

declare module 'todoCreation/TodoCreation' {
  import React from 'react';
  import { TodoCreationProps } from 'todo-shared-types';

  export const TodoCreation: React.FC<TodoCreationProps>;
}
