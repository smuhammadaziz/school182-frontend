import React, { useState } from 'react';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg",
  "https://t4.ftcdn.net/jpg/00/88/68/17/360_F_88681735_DGekSlvZg1keWVRNtDinXmwERnJwokEs.jpg",
  "https://media.istockphoto.com/id/472977124/photo/angry-teacher-looking-pupil.jpg?s=612x612&w=0&k=20&c=d1M8AOZnRRd9zk5Fz1w2zcI3B9O0meZX6YQT2efh2Es=",
  "https://media.istockphoto.com/id/2139297011/photo/elementary-science-lession.webp?b=1&s=612x612&w=0&k=20&c=IF5ZCF3YitVE8f1EHBGk3VI8pWOybuae5-MOS6mAbVw=",
];

function Intro() {
  const [lang] = useLang('ru');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="intro bg-slate-100 py-16 md:py-24 lg:py-32 relative">
      <div className="container max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-snug tracking-tight mb-6 md:mb-8">
            Empowering the Leaders of Tomorrow
          </h1>
          <p className="text-gray-800 text-base md:text-lg lg:text-2xl font-light mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0">
            At our school, every student is inspired to explore, grow, and excel in a world of endless possibilities.
          </p>
          <a
            href="/about"
            className="inline-block bg-sky-900 hover:bg-sky-950 text-white px-8 py-3 rounded-lg text-base md:text-lg font-medium transition duration-300 transform hover:scale-105 shadow-md"
          >
            Discover Our Story
          </a>
        </div>

        {/* Image Carousel */}
        <div className="lg:w-1/2 ms-0 lg:ms-4 relative">
          <div className="rounded-xl shadow-xl overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Carousel Controls */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-sky-900 text-white rounded-full 
                         px-2 py-1 text-sm md:px-3.5 md:py-1.5 md:text-base font-bold hover:bg-sky-950"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-sky-900 text-white rounded-full 
                         px-2 py-1 text-sm md:px-3.5 md:py-1.5 md:text-base font-bold hover:bg-sky-950"
            >
              ›
            </button>
            {/* Indicators */}
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-sky-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
