import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JournalForm from './JournalForm';

describe('JournalForm Component', () => {
  test('submits new entries correctly', async () => {
    const mockAddEntry = jest.fn();
    const mockUpdateEntry = jest.fn();
    const mockClearCurrent = jest.fn();

    render(<JournalForm addEntry={mockAddEntry} updateEntry={mockUpdateEntry} currentEntry={{}} clearCurrent={mockClearCurrent} />);

    const input = screen.getByPlaceholderText("Write your journal entry here...");
    await userEvent.type(input, "New entry");
    fireEvent.submit(screen.getByRole('button'));

    expect(mockAddEntry).toHaveBeenCalledWith("New entry");
    expect(input.value).toBe("");
  });
});