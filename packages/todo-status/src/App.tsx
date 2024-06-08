import { TodoFilter } from 'todo-shared-types';

import { TodoStatus } from './components/TodoStatus';

function App() {
  return (
    <>
      <TodoStatus
        todos={[]}
        filter={TodoFilter.ALL}
        setFilter={() => {}}
        toggleTodo={() => {}}
      />
    </>
  );
}

export default App;
