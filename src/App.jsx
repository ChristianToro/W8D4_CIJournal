import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JournalForm from './components/JournalForm.jsx';
import JournalEntry from './components/JournalEntry.jsx';

function App() {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState({});

  const addEntry = (text) => {
      const newEntry = { id: Date.now(), text };
      setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id) => {
      setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (entry) => {
      setCurrentEntry(entry);
  };

  const updateEntry = (updatedEntry) => {
      setEntries(entries.map(entry => (entry.id === updatedEntry.id ? updatedEntry : entry)));
  };

  const clearCurrent = () => {
      setCurrentEntry({});
  };
  

  return (
     <div className="app-container">
      <div className="app">
        <h1>Journal App</h1>
        <JournalForm addEntry={addEntry} updateEntry={updateEntry} currentEntry={currentEntry} clearCurrent={clearCurrent} />
        <div id="entries-container">
          {entries.map(entry => (
            <JournalEntry key={entry.id} entry={entry} deleteEntry={deleteEntry} editEntry={editEntry} />
          ))}
        </div>
      </div>
      <footer className="app-footer">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </div>
  );
}

export default App;

