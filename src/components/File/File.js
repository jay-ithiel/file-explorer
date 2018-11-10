import * as React from 'react';

import { AppConsumer } from '../App.context';
import { generateToken } from '../../utils';

export default class File extends React.Component {
  state = { id: generateToken() };
  
  render() {
    const { id } = this.state;
    return (
      <li>
        <AppConsumer>
          {
            ({ data, updateActiveId }) => {
              const activeClass = data.activeId === id ? 'active' : '';
              const handleClick = () => updateActiveId(id);
              return (
                <div className={ activeClass } onClick={ handleClick }>
                  <FileIcon />
                  <h3>{ this.props.file.name }</h3>
                </div>
              );
            }
          }
        </AppConsumer>
      </li>
    );
  }
}


/** Helper Components */

const FileIcon = () => (
  <img alt="file" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541824710/file_krfecv.png" />
);
