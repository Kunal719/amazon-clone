import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_column'>
        <div className='content'>
          <span className='footer_column_title'>Get to Know Us</span>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Careers</li>
          <li>Gift a Smile</li>
          <li>Amazon Science</li>
        </div>
        <div className='content'>
          <span className='footer_column_title'>Connect with Us</span>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </div>
        <div className='content'>
          <span className='footer_column_title'>Make Money with Us</span>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Amazon Global Selling</li>
          <li>Become and Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </div>
        <div className='content'>
          <span className='footer_column_title'>Let Us Help You</span>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Amazon Assistant Download</li>
          <li>Help</li>
        </div>
      </div>
      <div className='amazon_logo'>
        <img src='/images/amazon-logo.png' alt='' />
      </div>
    </div>
  );
};

export default Footer;
