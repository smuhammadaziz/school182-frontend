import React, { useEffect, useState } from 'react';
import './students.scss';

import personimg from '../../assets/images/person.jpg';

import { NavLink, useNavigate, useParams } from 'react-router-dom';

import backurl from '../../links';

function OneStudent() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`${backurl}api/admin/get/student/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();

        // console.log(data);
        setBlog(data.Student);
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to fetch blog', {
          position: 'top-right',
        });
      }
    }
    fetchBlog();
  }, [id]);
  return (
    <div className='oneteacher onstudent'>
      <div className='container'>
        <div className='oneteachers_wrapper'>
          <div className='oneteacher__photo'>
            <img
              src={`${backurl}upload/${blog.image}`}
              alt='every teacher phot'
              width='500'
            />
          </div>

          <div className='oneteacher__info'>
            <h2>
              {blog.name} {blog.l_name}
            </h2>
            <h2>{blog.class}</h2>
            <p>{blog.descr}</p>
            <NavLink to='/students'>Barcha o`quvchilarga qaytish</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneStudent;
