import { useReducer } from 'react';
import type { TodoAction, TodoState } from '../types/Todo';

const initialState: TodoState = [];

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: { text } });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
