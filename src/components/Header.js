import React from 'react';
import PropTypes from 'prop-types';
import Cart from './Cart';

const Header = ({ count }) => {
  return (
    <header>
      <h1>Store</h1>
      <Cart count={count} />
    </header>
  );
};

Header.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Header;
