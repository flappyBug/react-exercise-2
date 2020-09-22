import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import ProductList from './components/ProductList';

class App extends Component {
  state = { count: 0 };
  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        <ProductList
          onAddToCart={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        />
      </main>
    );
  }
}

export default App;
