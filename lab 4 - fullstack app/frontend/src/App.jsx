import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Tasks from './components/Tasks';

function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <div className="app-container">
      <header className="header">
        <h1>Lab 4: Fullstack Apps</h1>
        <div className="nav-tabs">
          <button 
            className={`tab-button ${activeTab === 'counter' ? 'active' : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            Counter App
          </button>
          <button 
            className={`tab-button ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            Task App
          </button>
        </div>
      </header>

      <main className="glass-panel">
        {activeTab === 'counter' ? <Counter /> : <Tasks />}
      </main>
    </div>
  );
}

export default App;
