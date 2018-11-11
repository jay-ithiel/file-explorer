import * as React from 'react';

import { AppConsumer } from '../App.context';
import { FileIcon } from '../Icons';

const File = ({ file, handleClick }) => (
  <AppConsumer>
    {
      ({ activeId, updateActiveId }) => {
        const activeClass = activeId === file.id ? 'active' : '';
        return (
          <div className={activeClass} onClick={handleClick}>
            <FileIcon />
            <h3>{file.name}</h3>
          </div>
        );
      }
    }
  </AppConsumer>
);

export default File;
