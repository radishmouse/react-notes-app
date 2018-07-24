import React from 'react';

import SearchBar from './SearchBar';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 1001,
          timestamp: new Date(),
          title: 'The Life and Times of Oakley',
          content: 'squeak squeak, mow mow.'
        },
        {
          id: 1002,
          timestamp: new Date(),
          title: 'The Life and Times of Milla',
          content: 'purr purr, drool drool.'
        }
      ]
    };
  }
  render() {
    return (
      <div className="notes-app">

        <SearchBar />
        <DocumentList
          allNotes={this.state.notes}
        />
        <DocumentEditor />

      </div>
    );
  }
}

export default App;
