import React from 'react';

class DocumentEditor extends React.Component {
  render() {
    return (
      <div className="document-editor">
        <textarea value="This is a note. See?" />
      </div>
    );
  }
}

export default DocumentEditor;