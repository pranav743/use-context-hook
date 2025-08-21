import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button 
        type="submit"
        disabled={!text.trim()}
        style={{ padding: '8px 16px' }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
