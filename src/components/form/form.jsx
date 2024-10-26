import React, { useState } from 'react';
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
    setName('');
    setPhone('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message for demo purposes
    toast.success('Contact successfully sent!', {
      position: 'top-right',
    });
    handleCancel();
  };

  return (
    <div className='bg-gradient-to-r bg-slate-100 py-12 flex items-center justify-center'>
      <div className='container mx-auto max-w-lg bg-white rounded-lg shadow-xl p-12'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6 pt-12'>
          {content[lang].form.heading}
        </h1>
        
        <form onSubmit={handleSubmit} >
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2 font-semibold'>
              {content[lang].form.fio}
            </label>
            <input
              type='text'
              placeholder={content[lang].form.fio}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2 font-semibold'>
              {content[lang].form.phone}
            </label>
            <input
              type='tel'
              placeholder={content[lang].form.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2 font-semibold'>
              {content[lang].form.comment}
            </label>
            <textarea
              cols='30'
              rows='5'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={content[lang].form.comment}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              required
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-600 mb-12 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md transform hover:scale-105'
            >
              {content[lang].form.send}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Form;
