import React from 'react';
import cart from '../assets/cart.svg';
import PropTypes from 'prop-types';
const Cart = ({ count }) => (
  <div>
    <img src={cart} />
    <div className="red-badge">{count}</div>
  </div>
);

Cart.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Cart;
