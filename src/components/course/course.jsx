import React from 'react';
import './course.scss';
import { courses } from '../../database/courses';

function Course() {
  return (
    <div className='newcourses'>
      <div className='container'>
        {courses
          ? courses.map(e => {
              return (
                <div className='courses__card' key={e.id}>
                  <p>id: {e.id}</p>
                  <p>title: {e.title}</p>
                  <p>desc: {e.desc}</p>
                  <p>
                    days:{' '}
                    {e.days.map(e => (
                      <span key={e.even}>
                        <p>{e.odd}</p>
                        <p>{e.even}</p>
                      </span>
                    ))}
                  </p>
                  <p>{e.title}</p>
                  <p>{e.title}</p>
                </div>
              );
            })
          : console.log('non')}
      </div>
    </div>
  );
}

export default Course;
