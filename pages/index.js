import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Slider } from '../components/Slider';
import slides from '../data/door.js';
import Windows from '../components/WindowsComponent';
import Head from 'next/head';

function Home() {
  const router = useRouter();
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
        setFormData({ name: '', email: '', message: '' });
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

  const redirectGilje = () => {
    let path = `/giljesense`;
    router.push(path);
    window.scrollTo(0, 0);
  };

  const redirectVinduer = () => {
    let path = `/vinduer`;
    router.push(path);
    window.scrollTo(0, 0);
  };

  const redirectDorer = () => {
    let path = `/dorer`;
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Head>
        <title>Dovre Vinduer</title>
        <meta
          name="description"
          content="Vinduer og dører av høy kvalitet."
          key="desc"
        />
      </Head>
      <div className="hero">
        <div className="left-hero">
          <h1>Vinduer og Dører som Forvandler Hjemmet Ditt</h1>
          <p>
            Valg av riktige dører og vinduer kan være avgjørende for hjemmets
            komfort, sikkerhet, og livskvalitet. La oss være din guide til et
            bedre hjem.
          </p>
        </div>
        <div className="right-hero"></div>
      </div>
      <div className="features-background">
        <div className="features">
          <div className="top-features">
            <h2>Vi tilbyr</h2>
            <p>
              Vi leverer et omfattende utvalg av høykvalitets dører og vinduer
              tilpasset ulike arkitektoniske behov og estetiske preferanser.
            </p>
          </div>
          <div className="bottom-features">
            <div>
              <button className="secondaryButton" onClick={redirectVinduer}>
                Vinduer
              </button>
            </div>
            <div>
              <button className="secondaryButton" onClick={redirectDorer}>
                Dører
              </button>
            </div>
            <div>
              <button className="secondaryButton" onClick={redirectGilje}>
                Gilje Sense
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-hero">
        <div className="mini-hero-main">
          <div className="left-mini-hero"></div>
          <div className="right-mini-hero">
            <h2>Hvem er vi?</h2>
            <p>
              Med over 30 års erfaring i bransjen hjelper vi deg med å
              skreddersy løsninger tilpasset deg, og dine prosjekters behov. Vi
              tilbyr et bredt utvalg av vinduer og dører som passer for alle og
              enhver.
            </p>
          </div>
        </div>
        <div className="mini-hero-overflow-div">
          <div>
            <h3>30+</h3>
            <p>års erfaring i bransjen</p>
          </div>
          <div>
            <h3>6</h3>
            <p>vindustyper for alle fasader</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>unike dører</p>
          </div>
        </div>
      </div>
      <Windows />
      <div className="slider-container">
        <h2>Dører</h2>
        <Slider slides={slides} />
      </div>
      {/* Contact Form Section */}
      <div className="contact-section">
        <h2>Kontakt Oss</h2>
        <p className="contact-description">
          Har du spørsmål om våre produkter eller tjenester? Fyll ut skjemaet
          nedenfor, så tar vi kontakt med deg så snart som mulig.
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
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Melding</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="primaryButton">
            Send Melding
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
        .contact-section {
          margin: 40px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-form label {
          font-weight: bold;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .primaryButton {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .primaryButton:hover {
          background-color: #0056b3;
        }
        .status-message {
          margin-top: 20px;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          font-size: 14px;
        }
        .status-message.success {
          background-color: #d4edda;
          color: #155724;
        }
        .status-message.error {
          background-color: #f8d7da;
          color: #721c24;
        }
        .contact-description {
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 16px;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Home;
