import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('handles adding, editing, and deleting an entry', async () => {
    render(<App />);

    
    await userEvent.type(screen.getByPlaceholderText("Write your journal entry here..."), "First entry");
    fireEvent.click(screen.getByText("Save Entry"));
    expect(await screen.findByText("First entry")).toBeInTheDocument(); 

    
    fireEvent.click(await screen.findByText("Edit")); 
    await userEvent.clear(screen.getByPlaceholderText("Write your journal entry here..."));
    await userEvent.type(screen.getByPlaceholderText("Write your journal entry here..."), "Updated entry");
    fireEvent.click(screen.getByText("Save Entry"));
    expect(await screen.findByText("Updated entry")).toBeInTheDocument(); 
    expect(screen.queryByText("First entry")).not.toBeInTheDocument();

    
    fireEvent.click(await screen.findByText("Delete")); 
    expect(screen.queryByText("Updated entry")).not.toBeInTheDocument(); 
  });
});