import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
// import './style.scss';
import moment from 'moment';

// Inline JSON data for news with nature images
const SchoolNews = [
  {
    blog_id: 1,
    title: 'New Semester Begins',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-10-01',
  },
  {
    blog_id: 2,
    title: 'Science Fair Success',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-09-15',
  },
  {
    blog_id: 3,
    title: 'Sports Day Highlights',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-08-30',
  },
  {
    blog_id: 4,
    title: 'Art Exhibition',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-07-20',
  },
  {
    blog_id: 5,
    title: 'Art Exhibition',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-07-20',
  },
  {
    blog_id: 6,
    title: 'Art Exhibition',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-07-20',
  },
  {
    blog_id: 7,
    title: 'Art Exhibition',
    img: 'https://www.staugustinescentrehalifax.org.uk/media/blog-images/Kids_in_school.jpg.1500x1500_q85.jpg',
    date: '2024-07-20',
  },
];

function AllNews() {
  const [lang] = useLang('ru');
  const ShortNews = SchoolNews;

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
    <div className="  py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ShortNews.length > 0 ? (
            ShortNews.map((newsItem) => (
              <NavLink
                to={`/news/1`}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                key={newsItem.blog_id}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="50"
                onClick={goToTop}
              >
                <img src={newsItem.img} alt={newsItem.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <strong className="block text-lg font-semibold text-gray-800 mb-2">{newsItem.title}</strong>
                  <span className="text-gray-600 text-sm">{moment(newsItem.date).format('LL')}</span>
                </div>
              </NavLink>
            ))
          ) : (
            <div>
              <p className="text-center text-gray-700">Don't have any news</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllNews;
