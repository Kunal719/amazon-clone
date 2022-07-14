import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeProduct = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };
  return (
    <div className='checkout_product'>
      <img src={image} alt='' className='checkoutproduct_image' />

      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeProduct}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
