import backurl from '../../links';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
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

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backurl}/api/admin/get/sides`, {
          method: 'get',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        // console.log(data);

        const reversedData = data.message.reverse();
        setBlogs(reversedData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

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
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          className='mySwiper'
        >
          {blogs ? (
            blogs.map(e => (
              <SwiperSlide key={e.side_id}>
                <div className='w-full h-100 overflow-hidden relative'>
                  <img
                    src={`${backurl}upload/${e.photo}`}
                    alt={e.title}
                    className='w-full h-full object-contain slider_image'
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className='w-full h-100 overflow-hidden relative'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1200px-24701-nature-natural-beauty.jpg'
                  alt='class image'
                  className='w-full h-full object-contain slider_image'
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Intro;
