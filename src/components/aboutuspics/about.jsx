import React from 'react';

import img1 from '../../assets/images/Picture1.jpg';
import img2 from '../../assets/images/Picture2.jpg';
import img3 from '../../assets/images/Picture3.jpg';
import img4 from '../../assets/images/Picture4.jpg';
import img5 from '../../assets/images/Picture5.png';
import img6 from '../../assets/images/Picture6.jpg';

function AboutUsPics() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Школьные фотографии</h2>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="group">
            <img src={img1} alt="Вход в школу" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Вход в школу</p>
          </li>
          <li className="group">
            <img src={img2} alt="Спортивный зал" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Спортивный зал</p>
          </li>
          <li className="group">
            <img src={img3} alt="Школьный стадион" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Школьный стадион</p>
          </li>
          <li className="group">
            <img src={img4} alt="Зал школы" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Зал школы</p>
          </li>
          <li className="group">
            <img src={img5} alt="Школьный класс" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Школьный класс</p>
          </li>
          <li className="group">
            <img src={img6} alt="Школьная кухня" className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
            <p className="mt-4 text-lg text-gray-700">Школьная кухня</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUsPics;
