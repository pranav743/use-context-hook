import React from 'react';
import type { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '8px' }}
      />
      <span
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          flexGrow: 1
        }}
      >
        {todo.text}
      </span>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: '8px' }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
