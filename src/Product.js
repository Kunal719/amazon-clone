/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  // state can be broken down to {cart}
  // console.log(cart);

  const addToCart = () => {
    // dispatch action as item to the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart} className='product_button'>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
