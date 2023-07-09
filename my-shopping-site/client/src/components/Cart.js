import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
