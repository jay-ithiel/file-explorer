import * as React from 'react';

export default class File extends React.Component {
  render() {
    return (
      <li>
        <div>
          <FileIcon />
          <h3>{this.props.file.name}</h3>
        </div>
      </li>
    );
  }
}


/** Helper Components */

const FileIcon = () => (
  <img alt="file" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541824710/file_krfecv.png" />
);
