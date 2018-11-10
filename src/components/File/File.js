import * as React from 'react';

const File = ({ file }) => (
  <li>
    <div>
      <FileIcon />
      <h3>{ file.name }</h3>
    </div>
  </li>  
);

export default File;


/** Helper Components */

const FileIcon = () => (
  <img alt="file" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541824710/file_krfecv.png" />
);
