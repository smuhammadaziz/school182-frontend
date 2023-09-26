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
          cssMode={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 11111,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <p className='intro__p'>{content[lang].intro.text}</p>
            <h1 className='intro__heading'>
              <span className='intro__span'>
                <i className='intro__i'></i>
              </span>
              <span className='intro__span'>
                <i className='intro__i'>{content[lang].intro.heading}</i>
              </span>
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <p className='intro__p'>{content[lang].intro.text}</p>
            <h1 className='intro__heading'>
              <span className='intro__span'>
                <i className='intro__i'></i>
              </span>
              <span className='intro__span'>
                <i className='intro__i'>{content[lang].intro.heading}</i>
              </span>
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Intro;
