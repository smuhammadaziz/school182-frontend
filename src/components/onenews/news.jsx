import React from 'react';
import './news.scss';
import img from '../../assets/images/111.jpeg';

import { NavLink } from 'react-router-dom';

function SingleNews() {
  return (
    <div className='singleNews'>
      <div className='container'>
        <div className='singlenews_wrapper'>
          <div className='single__wrapper__img'>
            <img src={img} alt='single news page image' width='600' />
          </div>
          <div className='single__wrapper__text'>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut eveniet
              natus tenetur quibusdam dolorem aut consequuntur mollitia tempore aliquam
              facere, quis temporibus necessitatibus dolor suscipit soluta, autem expedita
              dolores incidunt quas ex porro nam explicabo? Fuga, itaque. Deserunt,
              nostrum!
            </p>
            <p>11.01.2023</p>
            <NavLink to='/news' className='singlenews_link'>
              Yangiliklarga qaytish
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
