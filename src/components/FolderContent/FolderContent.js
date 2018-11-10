import * as React from 'react';

import File from '../File';
import Folder from '../Folder';

const FolderContent = ({ content }) => {
  const { children } = content;
  if (!children) return <ul></ul>;

  /**
   * Map childrenWithKeys for because we need non-changing
   * unique values for React children elements
   * */
  const childrenWithKeys = children.map((child, index) => (
    { ...child, key: index }
  ));

  return (
    <ul>
      {
        childrenWithKeys.map(child => (
          child.type === 'folder'
            ? <Folder folder={ child } key={ child.key } />
            : <File file={ child } key={ child.key } />
        ))
      }      
    </ul>
  )
}

export default FolderContent;
