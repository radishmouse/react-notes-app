import React from 'react';

import SearchBar from './SearchBar';
import DocumentList from './DocumentList';
import DocumentEditor from './DocumentEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: -1,  // -1 means no selection
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
          handleSelection={this._selectNote}
        />
        <DocumentEditor
          note={this.state.notes[0]}
        />

      </div>
    );
  }

  _selectNote = (noteId) => {
    console.log(noteId);

    // I want to save the id
    // of the selected note.
    this.setState({
      selectedId: noteId
    });
  }

}

export default App;
