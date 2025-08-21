export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoAction = 
  | { type: 'ADD_TODO'; payload: { text: string } }
  | { type: 'TOGGLE_TODO'; payload: { id: string } }
  | { type: 'DELETE_TODO'; payload: { id: string } };

export type TodoState = Todo[];
