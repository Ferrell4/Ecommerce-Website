import React from 'react';
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
        <div className="product__info">
            <p>
                {title}
            </p>
            <p className="product__price">
                $
                <strong>{price}</strong>
            </p>
            {/* this function allows stars to be added passed on amount given */}
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img src={image} alt="" />

        <button>Add to Basket</button>
    </div>
  )
}

export default Product