import React from 'react';
import './admins.scss';

import personimg from '../../assets/images/person.jpg';

import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function OneAdmin() {
  const [lang] = useLang('ru');
  return (
    <div className='oneteacher'>
      <div className='container'>
        <div className='oneteachers_wrapper'>
          <div className='oneteacher__photo'>
            <img src={personimg} alt='every teacher phot' width='500' />
          </div>

          <div className='oneteacher__info'>
            <h2>John doe maktab direktori</h2>
            <p>
              about teacher: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Alias, molestias sit! Aperiam ex dolorem expedita quod? Quisquam debitis
              maxime error omnis blanditiis id, ratione repellat aut nobis incidunt alias
              ipsam quidem assumenda iste quas veritatis dolores perferendis sit
              praesentium voluptas.
            </p>
            <p>
              teacher gools, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio animi quod fugit dignissimos ullam voluptate perferendis earum
              laudantium accusamus asperiores!
            </p>
            <NavLink to='/administration'>{content[lang].navbar.goAdmin}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneAdmin;
