import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../sass/index.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// GA4 Measurement ID
const GA_TRACKING_ID = 'G-FCK1NSGY19';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Function to track page views
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Add Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* App Layout */}
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
