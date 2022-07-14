/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
  const [state, dispatch] = useStateValue();

  const handleUser = () => {
    if (state.user) {
      auth.signOut();
      // dispatch({
      //   type: 'SET_USER',
      //   user: null
      // })
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src='/images/amazon-logo.png' alt='' />
      </Link>
      <div className='header_search'>
        <input className='header_searchIn' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to={!state.user && '/login'} className='text-link'>
          <div onClick={handleUser} className='header_option'>
            <span className='header_option_line1'>
              Hello,
              {state.user ? state.user.email : 'Guest'}
            </span>
            <span className='header_option_line2'>
              {state.user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to={!state.user ? '/login' : '/orders'} className='text-link'>
          <div className='header_option'>
            <span className='header_option_line1'>Return</span>
            <span className='header_option_line2'>& Orders</span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_option_line1'>Your</span>
          <span className='header_option_line2'>Prime</span>
        </div>
        <Link to={!state.user ? '/login' : '/checkout'} className='text-link'>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_option_line2 header_basketCount'>
              {state.cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
