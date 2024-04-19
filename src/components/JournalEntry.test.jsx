import { render, screen, fireEvent } from '@testing-library/react';
import JournalEntry from './JournalEntry';

describe('JournalEntry Component', () => {
  test('displays the entry and responds to buttons', () => {
    const entry = { id: 1, text: "Test entry" };
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();

    render(<JournalEntry entry={entry} editEntry={mockEdit} deleteEntry={mockDelete} />);

    
    expect(screen.getByText("Test entry")).toBeInTheDocument();

    
    fireEvent.click(screen.getByText("Edit"));
    expect(mockEdit).toHaveBeenCalledWith(entry);

    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledWith(entry.id);
  });
});