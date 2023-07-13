import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function History() {
  // Get user data from the query
  const { data } = useQuery(QUERY_USER);
  let user;

  // Extract the user data from the query response
  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        {/* Link to go back to the products page */}
        <Link to="/">
          ← Back to Products
        </Link>

        {user ? (
          <>
            {/* Display the order history for the user */}
            <h2>Order History for {user.firstName} {user.lastName}</h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                {/* Display the purchase date */}
                <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                <div className="flex-row">
                  {/* Display the products in the order */}
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      {/* Link to the product details page */}
                      <Link to={`/products/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        {/* Display the price of the product */}
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>
  );
};

export default History;
