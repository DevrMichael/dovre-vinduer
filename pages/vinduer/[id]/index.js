import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import windows from '../../../data/window';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

function WindowProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [content, setContent] = useState('');
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    if (!id) return;
    const window = windows.find((window) => window.id === id);
    setTitle(window.title);
    setImageSrc(window.image.src);
    setContent(window.content);
    setPageContent(window['page-content']);
  }, [id]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Vinduer fra Gilje " key="desc" />
      </Head>
      <div className="window-product-container">
        <div className="window-product-image">
          <Image src={imageSrc} alt="gilje vinduer" width={300} height={300} />
        </div>
        <div className="window-product-info">
          <div>
            <h3>{title}</h3>
            <br />
            <p>{content}</p>
            <br />
            <p>{pageContent}</p>
          </div>
          <br />
          <p>Ta kontakt for mer utfyllende informasjon.</p>
          <br />
          <Link href="/kontakt">
            <button
              className="primaryButton"
              style={{
                width: '80%',
              }}
            >
              Ta kontakt
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WindowProduct;
