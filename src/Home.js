import React from 'react';
import './Home.css';
import Product from './Product';
// import SimpleImageSlider from 'react-simple-image-slider';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/images/home-banner.jpg',
  },
  {
    original: '/images/home-banner2.jpg',
  },
  {
    original: '/images/home-banner3.jpg',
  },
  {
    original: '/images/home-banner4.jpg',
  },
];

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        {/* <img className='home_image' src='/images/home-banner.jpg' alt='' /> */}
        <div className='home_image'>
          {/* <SimpleImageSlider
            className='sliding_image'
            width='100%'
            height={500}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            slideDuration={1}
          /> */}
          <ImageGallery
            // className='home_image'
            items={images}
            autoPlay={true}
            showNav={false}
            showFullscreenButton={false}
            showBullets={false}
          />
        </div>
        <div className='home_row'>
          <Product
            id={1}
            title='LG Ultragear QHD (32 inch / 80 cm) 165 Hz 1ms, Nvidia G-Sync Compatible'
            price={21999}
            image='/images/product_television.jpg'
            rating={4}
          />
          <Product
            id={2}
            title='WeCool G1 1-Axis Gimbal Stabilizer with Wireless Remote, Extendable Bluetooth Selfie Stick and Tripod'
            price={2799}
            image='/images/stabilizer.jpg'
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id={3}
            title='CLAW Adjustable Laptop Stand with Dual Cooling Fans and Detachable Mousepad Tray'
            price={1699}
            image='/images/laptop_stand.jpg'
            rating={3}
          />
          <Product
            id={4}
            title='Maxima Max Bluetooth Calling Smartwatch'
            price={3499}
            image='/images/maxima.jpg'
            rating={5}
          />
          <Product
            id={5}
            title='Vivo iQOO Z6 44W (Lumina Blue, 4GB RAM)'
            price={14499}
            image='/images/vivo_phone.jpg'
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id={6}
            title='AORUS FI27Q 68.58 cm (27") Frameless Gaming Monitor, Quad HD 1440p, 95% DCI-P3 Color Accurate IPS Panel, 1ms 165Hz, HDR, G-SYNC Compatible and FreeSync Premium, VESA, Zero Bright Dot Policy'
            price={41499}
            image='/images/big_computer.jpg'
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
