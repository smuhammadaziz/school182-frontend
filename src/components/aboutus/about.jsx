import React from 'react';
import './about.scss';

function AboutSchool() {
  return (
    <div className='aboutschool'>
      <section className='page-section' id='about'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Информация о школе</h2>
            <h3 className='section-subheading text-muted'>История 182-й школы</h3>
          </div>
          <ul className='timeline'>
            <li>
              <div className='timeline-image'>
                <h4>
                  <br />
                  Info
                </h4>
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>Информация</h4>
                  <h4 className='subheading'>
                    {/* <br /> */}
                    Адресс, Телефон школы{' '}
                  </h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Чиланзорский район, город Ташкент, дом 6-12 <br />
                    +998 71 273-63-46
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>
                  <br />
                  Students
                </h4>
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2015-2016</h4>
                  <h4 className='subheading'>Студенты в школе</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Всего в школе было организовано 35 классов. Из них 25 классов русские,
                    10 классов узбекские. Всего в школе в 2015-2016 учебном году обучается
                    1190 учеников. Из них 874 учатся в русских классах. В узбекских
                    классах учатся 316 студентов.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'>
                <h4>
                  <br />
                  Junior
                </h4>
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2015-2016</h4>
                  <h4 className='subheading'>Младшие школьники</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Общее количество учащихся начальной школы составляет 722 человека. Из
                    них 565 учатся в классах русского языка. В узбекских классах учатся
                    157 студентов.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>
                  <br />
                  High
                </h4>
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2015-2016</h4>
                  <h4 className='subheading'>Ученики старшей школы</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>
                    Общее количество старшеклассников составляет 697 человек. Из них 488
                    учатся в русских классах. В узбекских классах учатся 209 студентов.
                  </p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>
                  <br />
                  182
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutSchool;
