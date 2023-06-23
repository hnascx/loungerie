import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import logo1 from '../assets/logo-topbar-1.svg'
import logo2 from '../assets/logo-topbar-2.png'
import logo3 from '../assets/logo-topbar-3.png'

import styles from './Topbar.module.css'

export function Topbar() {
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
          interval={3000}
        >
          <div className={styles.topbarElements}>
            <img src={logo1} style={{ width: '1.5rem', height: '1.5rem' }}/>
            <p className={styles.legend}><span className={styles.legendBold}>FRETE GRÁTIS</span>&nbsp;ACIMA DE R$239,90</p>
          </div>
          <div className={styles.topbarElements}>
            <img src={logo2} style={{ width: '1.5rem', height: '1.5rem' }} />
            <p className={styles.legend}>ENTREGA EM ATÉ&nbsp;<span className={styles.legendBold}>48 HORAS</span></p>
          </div>
          <div className={styles.topbarElements}> 
            <img src={logo3} style={{ width: '1.8rem', height: '1.5rem' }}/>
            <p className={styles.legend}><span className={styles.legendBold}>ATÉ 6X</span>&nbsp;SEM JUROS</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}