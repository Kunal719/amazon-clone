/* eslint-disable no-unused-vars */
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_img'
          src='/images/checkout_banner.png'
          alt=''
        />
        <div>
          {user?.email && <h4>Hello, {user?.email}</h4>}
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
