import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import ShoppingCart from '../components/ShoppingCart';

const HomePage = () => {
  return (
    <div className="container">
      {/* Display the category menu */}
      <CategoryMenu />
      {/* Display the product list */}
      <ProductList />
      {/* Display the shopping cart */}
      <ShoppingCart />
    </div>
  );
};

export default HomePage;
