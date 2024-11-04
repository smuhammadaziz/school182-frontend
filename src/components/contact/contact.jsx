import React from 'react';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function Contact() {
  const [lang] = useLang('ru');

  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="container mx-auto max-w-5xl px-6">
        
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">{content[lang].news.contact}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Map Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Карта</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.932978980963!2d69.21101131526083!3d41.28856307927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a368a87cc75%3A0xc2e1801138fccf5c!2z0KjQutC-0LvQsCDihJYxODI!5e0!3m2!1sru!2s!4v1677691967467!5m2!1sru!2s"
              height="300"
              className="w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Контактная информация</h2>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Адрес:</strong> Тошкент шаҳар, Чилонзор тумани, 6-чи квартал, 11A</li>
              <li><strong>Тел:</strong> +998 71 273 63 46</li>
              <li><strong>Telegram:</strong> @school_182</li>
              <li><strong>Instagram:</strong> @school_182</li>
              <li><strong>Facebook:</strong> @school_182</li>
              <li><strong>YouTube:</strong> @school_182</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
