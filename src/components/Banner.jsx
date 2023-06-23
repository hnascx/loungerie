import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.webp'

import styles from './Topbar.module.css'

export function Banner() {
  return (
    <div className={styles.topbar}>
      <div className={styles.carousel}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          showIndicators={false}
          showArrows={false}
          autoPlay={true}
          interval={4000}
        >
          <img src={banner1} style={{ height: '43rem' }}/>
          <img src={banner2} style={{ height: '43rem' }}/>
          <img src={banner3} style={{ height: '43rem' }}/>
        </Carousel>
      </div>
    </div>
  );
}