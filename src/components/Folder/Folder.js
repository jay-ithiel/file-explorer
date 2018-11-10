import * as React from 'react';

import { AppConsumer } from '../App.context';
import FolderContent from '../FolderContent';

import { generateToken } from '../../utils';
import { FILE_STATUS } from '../../constants';

const { COLLAPSED, EXPANDED } = FILE_STATUS;

export default class Folder extends React.Component {
  state = {
    id: generateToken(),
    status: COLLAPSED,
  };

  render() {
    const { folder } = this.props;
    const { id, status } = this.state;
    const isPrivateFolder = folder.private;
    const self = this;

    return (
      <li>
        <AppConsumer>
          {
            ({ data, updateActiveId }) => {
              const activeClass = data.activeId === id ? 'active' : '';
              const handleClick = () => {
                updateActiveId(id);
                self.toggleFolder();
              };

              return (
                <>
                  <div className={ activeClass } onClick={ handleClick }>
                    { status === COLLAPSED && <ExpandIcon /> }
                    { status === EXPANDED && <CollapseIcon /> }
                    { isPrivateFolder && <PrivateFolderIcon /> }
                    { !isPrivateFolder && <FolderIcon /> }
                    <h3>{this.props.folder.name}</h3>
                  </div>
                  { status === EXPANDED && <FolderContent content={ folder } /> }
                </>
              );
            }
          }
        </AppConsumer>
      </li>
    );
  }

  toggleFolder = () => {
    const newStatus = this.state.status === COLLAPSED ? EXPANDED : COLLAPSED;
    this.setState({ status: newStatus });
  };
}


/** Helper Components */

const CollapseIcon = () => (
  <img alt="collapse" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541825178/collapse_j5f9sj.png" />
);

const ExpandIcon = () => (
  <img alt="expand" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541825178/expand_w5m2es.png" />
);

const FolderIcon = () => (
  <img alt="folder" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541824963/folder_tazuxm.png" />
);

const PrivateFolderIcon = () => (
  <img alt="private-folder" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541824963/private_wjyyyc.png" />
);
