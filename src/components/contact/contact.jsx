import React from 'react';
import './contact.scss';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
function Contact() {
  const [lang] = useLang('ru');
  return (
    <div className='contact'>
      <div className='contact__main__heading'>
        <h2>{content[lang].news.contact}</h2>
      </div>
      <div className='container'>
        <div className='contact__info'>
          <div className='contact__info__map'>
            <h2>Карта</h2>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.932978980963!2d69.21101131526083!3d41.28856307927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a368a87cc75%3A0xc2e1801138fccf5c!2z0KjQutC-0LvQsCDihJYxODI!5e0!3m2!1sru!2s!4v1677691967467!5m2!1sru!2s'
              height='400'
              width='600'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='contact__info__map'>
            <h2>Контактная информация</h2>
            <ul className='contact__info__list'>
              <li className='contact__info__list__item'>
                Адрес: Тошкент шаҳар, Чилонзор тумани, 6-чи квартал, 11A
              </li>
              <li className='contact__info__list__item'>Tel: +998 71 273 63 46</li>
              <li className='contact__info__list__item'>Telegram: @school_182</li>
              <li className='contact__info__list__item'>Instagram: @school_182</li>
              <li className='contact__info__list__item'>Facebook: @school_182</li>
              <li className='contact__info__list__item'>Youtube: @school_182</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
