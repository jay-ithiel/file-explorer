import * as React from 'react';

import { AppConsumer } from '../App.context';
import File from '../File';
import Folder from '../Folder';

import { FOLDER_STATUS, FILE_TYPE } from '../../constants';
import { generateToken } from '../../utils';

const { COLLAPSED, EXPANDED } = FOLDER_STATUS;
const { FILE, FOLDER } = FILE_TYPE;

class FolderContent extends React.Component {
  state = generateDefaultState(this.props.content.children);
  
  render() {
    const { isRoot, saveState, parentId } = this.props;
    const { children } = this.state;
    if (!children) return <ul></ul>;
    return (
      <AppConsumer>
        {
          ({ _, updateActiveId, updateFileExplorerState }) => (
            <ul>
              {
                children.map(child => {                    
                  const handleClick = () => {
                    updateActiveId(child.id);
                    this.toggleFolder(child);
                    if (isRoot) return;
                    saveState({ child, parentId, updateFileExplorerState });
                  };
                  return (child.type === FILE) ? (
                    <li key={child.index}>
                      <File
                        file={child}
                        handleClick={() => updateActiveId(child.id)} />
                    </li>
                  ) : (
                    <li key={child.index}>
                      <Folder
                        folder={child}
                        handleClick={handleClick}
                        saveState={this.saveState} /> 
                    </li>
                  );
                })
              }
            </ul>
          )
        }
      </AppConsumer>
    );
  }

  getChildById = childId => {
    const childIndex = this.state.idToIndex[childId];
    return this.state.children[childIndex];
  };

  saveState = ({ child, parentId, updateFileExplorerState }) => {
    const { children, idToIndex } = this.state;
    const parentIndex = idToIndex[parentId];
    const parent = children[parentIndex];
    parent.children[child.index] = child;
    children[parentIndex] = parent;
    this.setState({ children }, () => updateFileExplorerState(this.state) );
  };

  toggleFolder = child => {
    const { children } = this.state;
    child.status = child.status === COLLAPSED ? EXPANDED : COLLAPSED;
    children[child.index] = child;
    this.setState({
      ...this.state,
      children,
    });
  };
}

export default FolderContent;


/** Helper Functions */

function generateDefaultState(content) {
  if (!content) return {};
  const children = generateChildData(content);
  const idToIndex = mapIdToIndex(children);
  return {
    children,
    idToIndex,
  };
}

function generateChildData(content) {
  return content.map((child, index) => {
    let childData = {
      ...child,
      id: generateToken(),
      index,
    };
    if (child.type === FOLDER && !childData.status) {
      childData.status = COLLAPSED;
    }
    return childData;
  });
}

function mapIdToIndex(children) {
  const idToIndex = {};
  children.forEach((child, index) => idToIndex[child.id] = index);
  return idToIndex;
}
