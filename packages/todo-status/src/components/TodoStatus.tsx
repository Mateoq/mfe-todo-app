import { useMemo } from 'react';
import { TodoFilter, TodoStatusProps } from 'todo-shared-types';

export const TodoStatus = (props: TodoStatusProps) => {
  const { todos, filter, toggleTodo, setFilter } = props;
  const isFilterAll = filter === TodoFilter.ALL;
  const isFilterActive = filter === TodoFilter.ACTIVE;
  const isFilterCompleted = filter === TodoFilter.COMPLETED;
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (isFilterActive) {
        return !todo.isComplete;
      }

      if (isFilterCompleted) {
        return todo.isComplete;
      }

      return true;
    });
  }, [todos, isFilterCompleted, isFilterActive]);

  return (
    <section>
      <h2>Todo List</h2>
      <div>
        <button
          style={{ backgroundColor: isFilterAll ? 'cyan' : 'initial' }}
          onClick={() => setFilter(TodoFilter.ALL)}
        >
          All
        </button>
        <button
          style={{ backgroundColor: isFilterActive ? 'cyan' : 'initial' }}
          onClick={() => setFilter(TodoFilter.ACTIVE)}
        >
          Active
        </button>
        <button
          style={{ backgroundColor: isFilterCompleted ? 'cyan' : 'initial' }}
          onClick={() => setFilter(TodoFilter.COMPLETED)}
        >
          Completed
        </button>
      </div>
      <br />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={`todo_${todo.id}`} onClick={() => toggleTodo(todo.id)}>
            {todo.isComplete ? (
              <del>{todo.text}</del>
            ) : (
              <span>{todo.text}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
