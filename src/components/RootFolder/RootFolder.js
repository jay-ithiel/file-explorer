import * as React from 'react';

import { FILE_STRUCTURE } from '../../data';
import FolderContent from '../FolderContent';

const RootFolder = () => (
  <section>
    <FolderContent content={ FILE_STRUCTURE } />
  </section>
);

export default RootFolder;
