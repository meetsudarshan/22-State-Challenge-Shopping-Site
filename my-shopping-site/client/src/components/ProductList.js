import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

const ProductList = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
