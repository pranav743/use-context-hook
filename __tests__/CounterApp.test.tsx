import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CounterApp from '../src/components/CounterApp';

describe('CounterApp', () => {
  it('renders the heading', () => {
    render(<CounterApp />);
    const heading = screen.getByRole('heading', { name: /counter app/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays initial count of 0', () => {
    render(<CounterApp />);
    const count = screen.getByText('0');
    expect(count).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    render(<CounterApp />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<CounterApp />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('-1')).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('-2')).toBeInTheDocument();
  });

  it('can increment and decrement together', () => {
    render(<CounterApp />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('3')).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
