import React from 'react'

function Products({product}) {
  return (
        <div key={product.id} className="product-card">
          <div class="product-image">
          <img src={product.image} alt={product.name} />
          </div>
          <h2>{product.title}</h2>
          <p>{product.rating.rate}</p>
          <p>${product.price}</p>
        </div>
  )
}

export default Products