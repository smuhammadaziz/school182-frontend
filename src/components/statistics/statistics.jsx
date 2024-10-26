import React, { useEffect } from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function Statistics() {
  const [lang] = useLang('ru');

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className='text-4xl font-bold text-blue-600'>{number.to(n => n.toFixed(0))}</animated.div>
    );
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{content[lang].stats.heading}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Statistics Cards */}
          <div
            className="StatCard flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <strong className="StatNumber flex items-center">
              <Number n={1300} />
              <span className="ml-1 text-2xl">+</span> {/* Added a span for the plus symbol */}
            </strong>
            <p className="StatType text-gray-600 text-center">{content[lang].stats.students}</p>
          </div>
          
          <div
            className="StatCard flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <strong className="StatNumber flex items-center">
              <Number n={65} />
              <span className="ml-1 text-2xl">+</span> {/* Plus symbol */}
            </strong>
            <p className="StatType text-gray-600 text-center">{content[lang].stats.teachers}</p>
          </div>

          <div
            className="StatCard flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <strong className="StatNumber flex items-center">
              <Number n={80} />
              <span className="ml-1 text-2xl">%</span> {/* Percent symbol */}
            </strong>
            <p className="StatType text-gray-600 text-center">{content[lang].stats.graduated}</p>
          </div>

          <div
            className="StatCard flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            data-aos="flip-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <strong className="StatNumber flex items-center">
              <Number n={25} />
              <span className="ml-1 text-2xl"></span> {/* Add a space if no symbol is needed */}
            </strong>
            <p className="StatType text-gray-600 text-center">{content[lang].stats.winner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
