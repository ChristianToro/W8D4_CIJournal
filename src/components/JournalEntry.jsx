function JournalEntry({ entry, deleteEntry, editEntry }) {
    return (
        <div className="entry">
            <p>{entry.text}</p>
            <button onClick={() => editEntry(entry)}>Edit</button>
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
        </div>
    );
}

export default JournalEntry;