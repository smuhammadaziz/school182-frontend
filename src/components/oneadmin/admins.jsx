import React from 'react';
import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function OneAdmin() {
  const [lang] = useLang('ru');
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Admin Photo */}
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/premium-photo/african-american-female-teacher-teaching-students_1204149-3845.jpg?semt=ais_hybrid"
              alt="Admin photo"
              className="w-full h-100 object-cover md:rounded-l-lg"
            />
          </div>
          
          {/* Admin Info */}
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Alice Smith</h2>
            <h2 className="text-lg font-bold text-gray-500 mb-4">Math & Science Teacher</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet suscipit, 
              consequatur quibusdam modi voluptatibus sunt ipsa sed adipisci fuga tenetur 
              quis, delectus ipsam porro quos. Magni ad natus quidem totam sequi recusandae 
              nesciunt a, vitae eaque repellat quibusdam quod accusantium laboriosam facere, 
              voluptatum laudantium qui distinctio id error? Pariatur, veritatis!
            </p>
            <NavLink
              to="/administration"
              className="inline-block bg-blue-600 text-center text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {content[lang].navbar.goAdmin}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneAdmin;
