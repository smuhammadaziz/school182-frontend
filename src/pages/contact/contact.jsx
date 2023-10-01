import React from 'react';
import './contact.scss';

//components
import Header from '../../components/header/header';
import ContactForm from '../../components/form/form';
import Contacts from '../../components/contact/contact';

function Contact() {
  return (
    <div className='contact__page'>
      <header>
        <Header />
      </header>

      <main className='contact__main'>
        <Contacts />
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Contact;
