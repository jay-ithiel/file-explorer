import React, { Component } from 'react';
import '../assets/stylesheets/App.css';

import { AppProvider } from './App.context';

import Header from './Header';
import RootFolder from './RootFolder';
import Footer from './Footer';

class App extends Component {
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
