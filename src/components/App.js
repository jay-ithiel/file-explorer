import React, { Component } from 'react';
import '../assets/stylesheets/App.css';

import { AppProvider } from './App.context';
import ResizeableWrapper from './Resizeable';
import Header from './Header';
import FolderContent from './FolderContent';
import Footer from './Footer';

import { FILE_STRUCTURE } from '../data';

class App extends Component {
  state = {
    activeId: '',
    content: FILE_STRUCTURE,
  };

  render() {
    const { activeId, content } = this.state;
    const contextValue = {
      activeId,
      updateActiveId: this.updateActiveId,
      updateFileExplorerState: this.updateFileExplorerState,
    };
    return (
      <ResizeableWrapper>
        <article>
          <AppProvider value={contextValue}>
            <Header/>
            <section>
              <FolderContent content={content} isRoot={true} />
            </section>
            <Footer/>
          </AppProvider>
        </article>
      </ResizeableWrapper>
    );
  }

  updateActiveId = activeId => this.setState({ activeId });

  updateFileExplorerState = newState => {
    this.setState({ fileExplorerState: newState });
  };
}

export default App;
