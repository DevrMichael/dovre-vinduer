import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import doors from '../../../data/door';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

function DoorProduct() {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (!id) return;
    const door = doors.find((door) => door.id === id);
    setTitle(door.title);
    setImageSrc(door.image.src);
  }, [id]);

  return (
    <div className="door-product-background container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Dører fra Gilje" key="desc" />
      </Head>
      <div className="door-product-container">
        <div className="door-product-image">
          <h2>{title}</h2>
          <Image src={imageSrc} alt="gilje dører" width={100} height={350} />
        </div>
        <div className="door-product-info">
          <div>
            <h3>Kvalitet</h3>
            <p>
              Giljes ytterdører er produsert for å tåle et skiftende norsk
              klima, og ikke minst hard bruk.
            </p>
          </div>
          <div>
            <h3>Kompaktlaminat</h3>
            <p>Kompaktlaminat er standard på alle våre ytterdører.</p>
          </div>
          <div>
            <h3>Bredde</h3>
            <p>
              Våre dører kan leveres inntil 129 cm bredde for enkeltdører og 239
              cm bredde for to-fløyede dører.
            </p>
          </div>
          <div>
            <h3>Høyde</h3>
            <p>Høyde kan leveres inntil 239 cm.</p>
          </div>
        </div>
      </div>
      <div className="door-product-contact-info">
        <br />
        <p>Ta kontakt for mer utfyllende informasjon.</p>
        <br />
        <Link href="/kontakt">
          <button
            className="primaryButton"
            style={{
              width: '100%',
            }}
          >
            Ta kontakt
          </button>
        </Link>
        <br />
      </div>
    </div>
  );
}

export default DoorProduct;
