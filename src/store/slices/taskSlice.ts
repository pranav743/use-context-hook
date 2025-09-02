import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: string;
  userId?: number;
}

interface TaskState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'pending';
  loading: boolean;
  error: string | null;
}

// Async thunk to fetch initial tasks from mock API
export const fetchInitialTasks = createAsyncThunk(
  'tasks/fetchInitial',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    const todos = await response.json();
    
    // Transform API data to our Task format
    const transformedTasks: Task[] = todos.map((todo: any) => ({
      id: todo.id.toString(),
      title: todo.title,
      description: `Task from API - ${todo.title}`,
      priority: 'medium' as const,
      completed: todo.completed,
      createdAt: new Date().toISOString(),
      userId: todo.userId,
    }));
    
    return transformedTasks;
  }
);

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
  loading: false,
  error: null,
};

// Load tasks from localStorage on initialization
if (typeof window !== 'undefined') {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    try {
      initialState.tasks = JSON.parse(savedTasks);
    } catch (error) {
      console.error('Error parsing saved tasks:', error);
    }
  }
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'createdAt'>>) => {
      const newTask: Task = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      state.tasks.push(newTask);
      // Persist to localStorage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<Task> }>) => {
      const { id, updates } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updates };
        // Persist to localStorage
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      // Persist to localStorage
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskComplete: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        // Persist to localStorage
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'pending'>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialTasks.fulfilled, (state, action) => {
        state.loading = false;
        // Only add API tasks if we don't have any tasks yet
        if (state.tasks.length === 0) {
          state.tasks = action.payload;
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
      })
      .addCase(fetchInitialTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      });
  },
});

export const { addTask, updateTask, deleteTask, toggleTaskComplete, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
