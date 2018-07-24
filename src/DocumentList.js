import React from 'react';

class DocumentList extends React.Component {
  render() {
    let items = this.props.allNotes.map(note => (
        <li className="document-list-item" key={note.id}>
          {note.title}
        </li>
      )
    );

    return (
      <div className="document-list">
        <ul>
          {items}
        </ul>
      </div>

    );
  }
}

export default DocumentList;