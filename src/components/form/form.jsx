import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import backurl from '../../links';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const Form = () => {
  const [lang] = useLang('ru');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const handleCancel = () => {
    // Clear all form data
    setName('');
    setPhone('');
    setDescription('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Create a form data object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('l_name', 'Default');
    formData.append('email', 'Default');
    formData.append('phone', phone);
    formData.append('message', description);

    try {
      const response = await fetch(`${backurl}api/contact/add`, {
        method: 'POST',
        body: formData,
      });

      console.log(response);

      if (response.ok) {
        toast.success('Contact successfully sent', {
          position: 'top-right',
        });
        handleCancel();
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      toast.warning(error.message, {
        position: 'top-right',
      });
    }
  };
  return (
    <div className='forms'>
      <div className='container'>
        <h1 className='blue sarlavha2' style={{ padding: '50px' }}>
          {content[lang].form.heading}
        </h1>
        <form action='Post' onSubmit={handleSubmit}>
          <div className='inputs'>
            <div className='input'>
              <p>{content[lang].form.fio}</p>
              <input
                type='text'
                placeholder={content[lang].form.fio}
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='input'>
              <p>{content[lang].form.phone}</p>
              <input
                type='number'
                placeholder={content[lang].form.phone}
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='textarea'>
            <p>{content[lang].form.comment}</p>
            <textarea
              name=''
              id='input'
              cols='30'
              rows='10'
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            ></textarea>

            <button type='submit'>{content[lang].form.send}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
