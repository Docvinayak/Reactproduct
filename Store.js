import React, { useState, useEffect } from "react";
import Products from "./Products";

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderedProducts = filteredProducts.map((product) => <Products product={product} />)

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {renderedProducts}
        </div>
      )}
    </div>
  );
}

export default ProductList;
