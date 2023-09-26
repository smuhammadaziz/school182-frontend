import React from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
      <animated.div className='animatedDiv'>{number.to(n => n.toFixed(0))}</animated.div>
    );
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='StatisticsPart'>
        <div className='container'>
          <h1 className='statistics_heading'>{content[lang].stats.heading}</h1>
          <div className='StatCardsWrapper'>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={1300} />+
              </strong>
              <p className='StatType'>{content[lang].stats.students}</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={65} />+
              </strong>
              <p className='StatType'>{content[lang].stats.teachers}</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={80} />%
              </strong>
              <p className='StatType'>{content[lang].stats.graduated}</p>
            </div>
            <div
              className='StatCard'
              data-aos='flip-down'
              data-aos-duration='1000'
              data-aos-delay='50'
            >
              <strong className='StatNumber'>
                <Number n={25} />
              </strong>
              <p className='StatType'>{content[lang].stats.winner}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
