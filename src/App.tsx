import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodo } from './hooks/useTodo';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo();

  return (
    <div style={{ 
      maxWidth: '600px',
      margin: '0 auto', 
      padding: '20px'
    }}>
      <h1>Todo List with useReducer</h1>
      
      <TodoForm onAddTodo={addTodo} />
      
      <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;