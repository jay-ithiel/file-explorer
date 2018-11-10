import React, { Component } from 'react';
import '../assets/stylesheets/App.css';

import Header from './Header';
import RootFolder from './RootFolder';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <RootFolder/>
        <Footer/>
      </div>
    );
  }
}

export default App;
