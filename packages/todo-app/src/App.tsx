import { useState, useEffect, Suspense } from 'react';

import { Todo, TodoFilter } from 'todo-shared-types';
import { TodoStatus } from 'todoStatus/TodoStatus';
import { TodoCreation } from 'todoCreation/TodoCreation';

const TODOS_KEY = 'todos';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>(TodoFilter.ALL);

  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem(TODOS_KEY) ?? '[]',
    ) as Todo[];
    setTodos(storedTodos);
    console.log('STORED_DATA', localStorage.getItem(TODOS_KEY));
  }, []);

  const addTodoHandler = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
  };

  const toggleTodoHandler = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
    );
    setTodos(newTodos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(newTodos));
  };

  return (
    <div>
      <h1>Todos App</h1>
      <Suspense fallback="Loading Form...">
        <TodoCreation addTodo={addTodoHandler} />
      </Suspense>
      <Suspense fallback="Loading List...">
        <TodoStatus
          todos={todos}
          filter={filter}
          setFilter={setFilter}
          toggleTodo={toggleTodoHandler}
        />
      </Suspense>
    </div>
  );
};

export default App;
