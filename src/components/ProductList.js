import React, { Component } from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
export default class ProductList extends Component {
  static propTypes = {
    onAddToCart: PropTypes.func,
  };
  state = {
    isLoading: true,
    products: null,
  };

  async componentDidMount() {
    const products = await (
      await fetch('http://localhost:3000/products')
    ).json();
    this.setState({
      isLoading: false,
      products,
    });
  }

  buildCategoryMap() {
    const categories = new Map();
    for (const product of this.state.products) {
      const category = categories.get(product.category);
      if (!category) {
        categories.set(product.category, [product]);
      } else {
        category.push(product);
      }
    }
    return categories;
  }

  renderCategory(category, products) {
    return (
      <div key={category}>
        <h2>{category}</h2>
        <div className="flex-container">
          {products.map(({ name, price }, i) => (
            <Product
              name={name}
              price={price}
              key={i}
              onAddToCart={this.props.onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return 'loading...';
    }
    const categories = new Map();
    for (const product of this.state.products) {
      const category = categories.get(product.category);
      if (!category) {
        categories.set(product.category, [product]);
      } else {
        category.push(product);
      }
    }
    return (
      <div>
        {[...categories.entries()].map((entry) =>
          this.renderCategory(entry[0], entry[1])
        )}
      </div>
    );
  }
}
