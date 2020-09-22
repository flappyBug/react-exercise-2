import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header count={0} />
      </main>
    );
  }
}

export default App;
