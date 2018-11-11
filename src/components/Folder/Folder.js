import * as React from 'react';

import { AppConsumer } from '../App.context';
import FolderContent from '../FolderContent';
import { CollapseIcon, ExpandIcon, FolderIcon, PrivateFolderIcon } from '../Icons';

import { FOLDER_STATUS } from '../../constants';

const { COLLAPSED, EXPANDED } = FOLDER_STATUS;

const Folder = ({ folder, handleClick, saveState }) => (
  <AppConsumer>
    {
      ({ activeId, _ }) => {
        const { id, status } = folder;
        const isPrivateFolder = folder.private;
        const activeClass = activeId === id ? 'active' : '';
        return (
          <>
            <div className={activeClass} onClick={handleClick}>
              {status === COLLAPSED && <ExpandIcon />}
              {status === EXPANDED && <CollapseIcon />}
              {isPrivateFolder && <PrivateFolderIcon />}
              {!isPrivateFolder && <FolderIcon />}
              <h3>{folder.name}</h3>
            </div>
            {
              status === EXPANDED && (
                <FolderContent
                  content={folder}
                  parentId={id}
                  saveState={saveState} />
              )
            }
          </>
        );
      }
    }
  </AppConsumer>
);

export default Folder;
