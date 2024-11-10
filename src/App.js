import React from 'react';
import SimpleForm from './SimpleForm'; // Import SimpleForm component
import logo from './logo.svg';
import './App.css'; // Ensure App.css exists and is imported

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Simple React Form</h1>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {/* Render SimpleForm Component */}
        <SimpleForm />
      </main>
    </div>
  );
}

export default App;
