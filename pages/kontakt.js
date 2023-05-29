import React from 'react';
import Head from 'next/head';

function Contact() {
  return (
    <div className="contact-form-background">
      <Head>
        <title>Dovre Vinduer | Kontakt Oss</title>
        <meta
          name="description"
          content="Kontakt oss for mer utfyllende informasjon om våre produkter."
          key="desc"
        />
      </Head>
      <div className="contact-form-image"></div>
      <div className="contact-form-container">
        <h1>Kontakt Oss</h1>
        <p>
          Ta kontakt med oss i dag for mer utfyllende informasjon om våre
          produkter og tjenester. <br /> <br /> Send oss en mail ved å klikke{' '}
          <a href="mailto:naeem@dovrevinduer.no">her</a> eller ring oss på tlf{' '}
          <a href="tel:004790761578">+47 90761578</a>
        </p>
        {/* <form className='contact-form'>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="textarea">Message</label>
        <textarea name="textarea" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form> */}
      </div>
    </div>
  );
}

export default Contact;
