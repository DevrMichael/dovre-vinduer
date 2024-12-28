import React, { useState } from 'react';
import Head from 'next/head';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });

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
        setStatus({ type: 'success', message: 'Meldingen ble sendt!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus({
          type: 'error',
          message: 'Kunne ikke sende meldingen. Vennligst prøv igjen.',
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'Det oppstod en feil. Vennligst prøv igjen senere.',
      });
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
          produkter og tjenester.
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
          <button type="submit">Send</button>
        </form>
        {status.message && (
          <div
            className={`status-message ${
              status.type === 'success' ? 'success' : 'error'
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
      <style jsx>{`
        .status-message {
          margin-top: 20px;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
        }
        .status-message.success {
          color: #155724;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
        }
        .status-message.error {
          color: #721c24;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </div>
  );
}

export default Contact;
