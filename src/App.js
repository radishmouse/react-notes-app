import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="notes-app">

        <header className="search-bar">
          <h1>React Notes App</h1>
          <input type="text" />
        </header>

        <div className="document-list">
          <ul>
            <li className="document-list-item">Note numbah one</li>
            <li className="document-list-item">Note numbah two</li>
            <li className="document-list-item">Note numbah three</li>
          </ul>
        </div>

        <div className="document-editor">
          <textarea value="This is a note. See?" />
        </div>
      </div>
    );
  }
}

export default App;
