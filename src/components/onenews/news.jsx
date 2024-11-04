import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

function SingleNews() {
  return (
    <div className="singleNews bg-gray-50 py-10 min-h-screen">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="singlenews_wrapper bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="single__wrapper__img">
            <img
              src="https://3.files.edl.io/4e8f/24/07/31/142934-74b1ff75-0b5f-4065-a0ba-45f3a4fbbf0c.jpg"
              alt="single news page image"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="single__wrapper__text p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">School News | New Event</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid voluptatum recusandae cum modi 
              molestias vero impedit nam blanditiis mollitia cumque error, est, minima corrupti nesciunt vitae itaque! 
              Fugit dolor voluptates vero sunt officia ullam quae atque sit cupiditate adipisci non facere ex consequuntur 
              nam architecto, sed eveniet reprehenderit molestiae.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              {moment("2024-04-24").format("DD.MM.YYYY")}
            </p>
            <NavLink to="/news" className="inline-block text-blue-600 hover:text-blue-800 transition duration-300">
              &larr; Back to News
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
