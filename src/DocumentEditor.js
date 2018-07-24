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

// A function component is like a
// "render-only" component.
// It can't have state.
// It doesn't have lifecycle methods like
// componentDidMount or constructor
// const DocumentEditor = (props) => {
//   return (
//     <div className="document-editor">
//       <textarea value="This is a note. See?" />
//     </div>
//   )
// }


export default DocumentEditor;