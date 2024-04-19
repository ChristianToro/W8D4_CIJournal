import { useState, useEffect } from 'react';

function JournalForm({ addEntry, updateEntry, currentEntry, clearCurrent }) {
    const [text, setText] = useState('');

    
    useEffect(() => {
        if (currentEntry && currentEntry.id) {
            setText(currentEntry.text);
        } else {
            setText('');
        }
    }, [currentEntry]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentEntry && currentEntry.id) {
            updateEntry({ ...currentEntry, text });
            clearCurrent();
        } else {
            addEntry(text);
        }
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea className="journal-textarea" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your journal entry here..."></textarea>
            <button type="submit">Save Entry</button>
        </form>
    );
}

export default JournalForm;