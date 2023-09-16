import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Section1.scss';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Section1() {
  return (
    <div className='section1'>
     <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1286917024-scaled.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/gettyimages-1055658672-scaled.jpg  " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1080398760-scaled.jpg" />
        </SwiperSlide>
        <SwiperSlide> 
        <img src="https://coiffure.vamtam.com/wp-content/uploads/2023/01/GettyImages-1129384936-scaled.jpg" />

        </SwiperSlide>
      
      </Swiper>

      <div className='h1-title'>
        <h1>Look & Feel Your Best</h1>

      </div>
      <div className='divider'>
        <span className='element'> </span>

      </div>
      <div className='alt-divider'>
        <p>758 5TH AVENUE
          <br/>
IN THE HEART OF NYC</p>
      </div>
    </div>  
   
  )
}
