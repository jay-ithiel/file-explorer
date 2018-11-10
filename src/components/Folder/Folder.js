import * as React from 'react';

import FolderContent from '../FolderContent';

import { fileStatus } from '../../constants';
const { COLLAPSED, EXPANDED } = fileStatus;

export default class Folder extends React.Component {
  state = {
    status: COLLAPSED,
  };

  render() {
    const { folder } = this.props;
    const { status } = this.state;
    return (
      <li>
        <div onClick={ this.toggleFolder }>{ this.props.folder.name }</div>
        { status === EXPANDED && <FolderContent content={ folder } /> }
      </li>
    );
  }

  toggleFolder = () => {
    const newStatus = this.state.status === COLLAPSED ? EXPANDED : COLLAPSED;
    this.setState({ status: newStatus });
  };
}
