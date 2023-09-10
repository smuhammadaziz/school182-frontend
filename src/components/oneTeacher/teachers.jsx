import React from 'react';
import './teachers.scss';

import personimg from '../../assets/images/person.jpg';

function OneTeacher() {
  return (
    <div className='oneteacher'>
      <div className='container'>
        <div className='oneteachers_wrapper'>
          <div className='oneteacher__photo'>
            <img src={personimg} alt='every teacher phot' width='500' />
          </div>

          <div className='oneteacher__info'>
            <h2>John doe</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTeacher;
