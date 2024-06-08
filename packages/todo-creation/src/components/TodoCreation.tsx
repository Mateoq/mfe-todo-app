import React, { useState } from 'react';
import { Todo, TodoCreationProps } from 'todo-shared-types';

export const TodoCreation = (props: TodoCreationProps) => {
  const { addTodo } = props;
  const [text, setText] = useState('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text || text === '') {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text,
      isComplete: false,
    };

    addTodo(newTodo);
    setText('');
  };

  return (
    <section>
      <h2>Todo Form</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          placeholder="Todo Text"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};
