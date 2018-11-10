import * as React from 'react';



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
      
    </ul>
  )
}

export default FolderContent;
