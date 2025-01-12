import React, { useState } from 'react';
import Head from 'next/head';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        setFormData({ name: '', email: '', phone: '', message: '' });
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
          <label htmlFor="name">Navn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Telefonnummer</label>{' '}
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Melding</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="full-width-button">
            Send
          </button>
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
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .full-width-button {
          width: 100%;
          padding: 1rem;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
        }
        .full-width-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Contact;
