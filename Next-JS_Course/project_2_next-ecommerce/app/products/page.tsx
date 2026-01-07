import React from "react";

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 19.99 },
  ];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
