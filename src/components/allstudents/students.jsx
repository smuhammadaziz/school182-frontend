import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

// Inline JSON data for students
const data = [
  {
    id: 1,
    name: 'John',
    l_name: 'Doe',
    class: '10A',
    teachener_name: 'Alice',
    teachener_surname: 'Smith',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  {
    id: 2,
    name: 'Jane',
    l_name: 'Smith',
    class: '9B',
    teachener_name: 'Bob',
    teachener_surname: 'Johnson',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  {
    id: 2,
    name: 'Jane',
    l_name: 'Smith',
    class: '9B',
    teachener_name: 'Bob',
    teachener_surname: 'Johnson',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  {
    id: 2,
    name: 'Jane',
    l_name: 'Smith',
    class: '9B',
    teachener_name: 'Bob',
    teachener_surname: 'Johnson',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  {
    id: 2,
    name: 'Jane',
    l_name: 'Smith',
    class: '9B',
    teachener_name: 'Bob',
    teachener_surname: 'Johnson',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  {
    id: 2,
    name: 'Jane',
    l_name: 'Smith',
    class: '9B',
    teachener_name: 'Bob',
    teachener_surname: 'Johnson',
    image: 'https://media.istockphoto.com/id/950604178/photo/smiling-hispanic-boy-at-school.jpg?s=612x612&w=0&k=20&c=nEsS2GmbXc1AZRPazdi92yPWQ3XVRpKBLRh6RfUJRGA=',
  },
  // ...other students
];

const AllStudents = () => {
  const [lang] = useLang('ru');

  useEffect(() => {
    AOS.init();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-slate-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">{content[lang].students.heading}</h1> */}
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 px-4 sm:px-6 lg:px-0">
          {data.map((student) => (
            <div
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
              key={student.id}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={student.image}
                  alt={`${student.name} ${student.l_name}`}
                  className="w-full h-40 sm:h-60 lg:h-72 object-cover rounded-t-xl transition duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60 rounded-t-xl"></div>
                <h4 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl lg:text-2xl font-semibold z-10">
                  {student.name} {student.l_name}
                </h4>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <p className="text-base sm:text-lg text-gray-600 mb-2">
                  {content[lang].students.text1} <span className="font-semibold text-gray-800">{student.class}</span>{' '}
                  {content[lang].students.text2}
                </p>
                <p className="text-gray-500 text-sm sm:text-base mb-4">
                  {student.teachener_name} {student.teachener_surname}
                </p>

                {/* Link to More Info */}
                <NavLink
                  to={`/students/${student.id}`}
                  className="inline-block text-blue-600 font-medium text-sm sm:text-base underline hover:text-blue-800 transition-colors"
                  onClick={goToTop}
                >
                  {content[lang].news.moreinfo}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
