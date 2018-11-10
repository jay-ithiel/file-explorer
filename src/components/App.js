import React, { Component } from 'react';
import '../assets/stylesheets/App.css';

import { AppProvider } from './App.context';

import Header from './Header';
import RootFolder from './RootFolder';
import Footer from './Footer';

class App extends Component {
  /**
   * Each file/folder has a unique 'id'. When clicked,
   * updateActiveId will be invoked, setting state.activeId
   * to the id of the file/folder that was clicked.
   * 
   * On the file/folder level, if the activeId matches its
   * id, it will be toggled as 'active', giving it the
   * 'active' styles
   * 
   * Can deploy this logic to keep track of the state of the 
   * file explorer for the Advanced 'Export' feature
   * 
   * */
  state = {
    activeId: '',
  };
  
  render() {
    const contextValue = {
      data: this.state,
      updateActiveId: this.updateActiveId,
    };
    
    return (
      <div className="App">
        <AppProvider value={ contextValue }>
          <Header/>
          <RootFolder/>
          <Footer/>
        </AppProvider>
      </div>
    );
  }

  updateActiveId = activeId => this.setState({ activeId });
}

export default App;
