import React from 'react';
import { NavLink } from 'react-router-dom';

function OneStudent() {
  return (
    <div className="onstudent bg-gray-50 py-10 ">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="onestudent_wrapper bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Student Photo */}
          <div className="onestudent__photo md:w-2/4">
            <img
              src="https://cdn.pixabay.com/photo/2024/08/14/17/34/ai-generated-8969238_640.jpg"
              alt="student photo"
              className="w-full h-100 object-cover md:rounded-l-lg"
            />
          </div>
          
          {/* Student Info */}
          <div className="onestudent__info p-6 md:w-2/4 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Alice Smith</h2>
            <h3 className="text-xl text-gray-600 mb-4">Class: 11 A</h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit dicta quisquam recusandae quo iure 
              nam deleniti qui possimus similique.
            </p>
            <NavLink
              to="/students"
              className="block w-100 text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              &larr; Back to Students
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneStudent;
