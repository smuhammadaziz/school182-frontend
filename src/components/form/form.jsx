import React from 'react';
import './style.scss';
import { useState } from 'react';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const Form = () => {
  const [lang] = useLang('ru');
  const [value, setValue] = useState('');
  return (
    <div className='forms'>
      <div className='container'>
        <h1 className='blue sarlavha2' style={{ padding: '50px' }}>
          {content[lang].form.heading}
        </h1>
        <form action='Post'>
          <div className='inputs'>
            <div className='input'>
              <p>{content[lang].form.fio}</p>
              <input
                type='text'
                placeholder={content[lang].form.fio}
                onChange={e => {
                  setValue(e.target.value);
                }}
              />
            </div>
            <div className='input'>
              <p>{content[lang].form.phone}</p>
              <input type='number' placeholder={content[lang].form.phone} />
            </div>
          </div>
          <div className='textarea'>
            <p>{content[lang].form.comment}</p>
            <textarea name='' id='input' cols='30' rows='10'></textarea>

            <button type='submit'>{content[lang].form.send}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
