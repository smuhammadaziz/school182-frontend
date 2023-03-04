import React, { useRef, useState } from 'react';
import './intro.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

function Intro() {
  return (
    <div className='intro'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          Odio aspernatur velit quidem illo totam expedita esse cupiditate voluptates
          commodi ad.
        </SwiperSlide>
        <SwiperSlide>
          Odio aspernatur velit quidem illo totam expedita esse cupiditate voluptates
          commodi ad.
        </SwiperSlide>
        <SwiperSlide>
          Odio aspernatur velit quidem illo totam expedita esse cupiditate voluptates
          commodi ad.
        </SwiperSlide>
        <SwiperSlide>
          Odio aspernatur velit quidem illo totam expedita esse cupiditate voluptates
          commodi ad.
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Intro;
