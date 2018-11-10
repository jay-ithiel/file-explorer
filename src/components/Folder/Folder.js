import * as React from 'react';

import { fileStatus } from '../../constants';
const { COLLAPSED, EXPANDEND } = fileStatus;

export default class Folder extends React.Component {
  state = {
    status: COLLAPSED,
  };

  render() {
    return (
      <>
        <div>Folder Name</div>
      </>
    );
  }
}
