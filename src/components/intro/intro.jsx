import React, { useEffect } from 'react';
import './intro.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

import AOS from 'aos';
import 'aos/dist/aos.css';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function Intro() {
  const [lang] = useLang('ru');
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className='intro'>
      <div className='container'>
        <Swiper
          // cssMode={true}
          pagination={true}
          // mousewheel={true}
          keyboard={true}
          // loop={true}
          autoplay={{
            delay: 11111,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Intro;
