/* eslint-disable no-unused-vars */
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.cart.length} items) : <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(state.cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button
        disabled={state.cart.length > 0 ? false : true}
        onClick={(e) => navigate('/payments')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
