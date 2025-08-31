import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoApp from '../src/components/TodoApp';

describe('TodoApp', () => {
  it('renders input and add button', () => {
    render(<TodoApp />);
    
    const heading = screen.getByRole('heading', { name: /todo app/i });
    expect(heading).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    expect(input).toBeInTheDocument();
    
    const addButton = screen.getByRole('button', { name: /add/i });
    expect(addButton).toBeInTheDocument();
  });

  it('displays empty state message initially', () => {
    render(<TodoApp />);
    
    const emptyMessage = screen.getByText(/no todos yet/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it('adds a todo to the list when add button is clicked', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    fireEvent.change(input, { target: { value: 'Test todo item' } });
    fireEvent.click(addButton);
    
    const todoItem = screen.getByText('Test todo item');
    expect(todoItem).toBeInTheDocument();
    
    // Empty state message should be gone
    expect(screen.queryByText(/no todos yet/i)).not.toBeInTheDocument();
  });

  it('clears input after adding a todo', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    fireEvent.change(input, { target: { value: 'Another todo' } });
    fireEvent.click(addButton);
    
    expect(input).toHaveValue('');
  });

  it('can add multiple todos', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Add first item
    fireEvent.change(input, { target: { value: 'First todo' } });
    fireEvent.click(addButton);
    
    // Add second item
    fireEvent.change(input, { target: { value: 'Second todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('First todo')).toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();
  });

  it('removes todo when delete button is clicked', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Add an item
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    fireEvent.click(addButton);
    
    // Verify item exists
    expect(screen.getByText('Todo to delete')).toBeInTheDocument();
    
    // Click delete button
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    // Item should be removed
    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
    
    // Empty state message should return
    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
  });

  it('does not add empty todos', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Try to add empty item
    fireEvent.click(addButton);
    
    // Empty state message should still be there
    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
    
    // Try to add whitespace-only item
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Empty state message should still be there
    expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();
  });

  it('each todo has its own delete button', () => {
    render(<TodoApp />);
    
    const input = screen.getByPlaceholderText(/enter a todo/i);
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Add two items
    fireEvent.change(input, { target: { value: 'First todo' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Second todo' } });
    fireEvent.click(addButton);
    
    // Should have two delete buttons
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    expect(deleteButtons).toHaveLength(2);
    
    // Delete first item (click first delete button)
    fireEvent.click(deleteButtons[0]);
    
    // Only second item should remain
    expect(screen.queryByText('First todo')).not.toBeInTheDocument();
    expect(screen.getByText('Second todo')).toBeInTheDocument();
    
    // Should have one delete button left
    expect(screen.getAllByRole('button', { name: /delete/i })).toHaveLength(1);
  });
});
