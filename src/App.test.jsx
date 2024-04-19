import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('handles adding, editing, and deleting an entry', () => {
    render(<App />);

    
    userEvent.type(screen.getByPlaceholderText("Write your journal entry here..."), "First entry");
    fireEvent.click(screen.getByText("Save Entry"));
    expect(screen.getByText("First entry")).toBeInTheDocument();

    
    fireEvent.click(screen.getByText("Edit"));
    userEvent.clear(screen.getByPlaceholderText("Write your journal entry here..."));
    userEvent.type(screen.getByPlaceholderText("Write your journal entry here..."), "Updated entry");
    fireEvent.click(screen.getByText("Save Entry"));
    expect(screen.queryByText("First entry")).not.toBeInTheDocument();
    expect(screen.getByText("Updated entry")).toBeInTheDocument();

    
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Updated entry")).not.toBeInTheDocument();
  });
});