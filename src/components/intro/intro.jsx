import React from 'react';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function Intro() {
  const [lang] = useLang('ru');

  return (
    <section className="intro bg-slate-100 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug tracking-tight mb-6 md:mb-8">
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

        {/* Image */}
        <div className="lg:w-1/2 relative">
          <div className=" shadow-xl overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
            <img
              src="https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg"
              alt="School building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-3/4 h-3/4 md:w-2/3 lg:w-3/4 h-3/4 rounded-full bg-gray-200 opacity-30 transform scale-150" />
      </div>
    </section>
  );
}

export default Intro;
