import React, { useState } from 'react';
import Head from 'next/head';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again.');
    }
  };

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
          <a href="mailto:post@dovrevinduer.no">her</a> eller ring oss på tlf.{' '}
          <a href="tel:004790761578">90761578</a>.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
