import React, { useEffect, useState } from 'react';
import './news.scss';
import img from '../../assets/images/111.jpeg';

import { NavLink } from 'react-router-dom';

import { useNavigate, useParams } from 'react-router-dom';

import backurl from '../../links';
import moment from 'moment';

function SingleNews() {
  const [blog, setBlog] = useState([]);
  const { blog_id } = useParams();
  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`${backurl}api/get/blog/${blog_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();

        // console.log(data);
        setBlog(data.Data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to fetch blog', {
          position: 'top-right',
        });
      }
    }
    fetchBlog();
  }, [blog_id]);

  return (
    <div className='singleNews'>
      <div className='container'>
        <div className='singlenews_wrapper'>
          <div className='single__wrapper__img'>
            <img
              src={`${backurl}upload/${blog.img}`}
              alt='single news page image'
              width='600'
            />
          </div>
          <div className='single__wrapper__text'>
            <h2>{blog.title}</h2>
            <p>{blog.descr}</p>
            <p>{moment(blog.created_at).format('l')}</p>
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
