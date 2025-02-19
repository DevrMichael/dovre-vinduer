import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import '../sass/index.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// GA4 Measurement ID
const GA_TRACKING_ID = 'G-FCK1NSGY19';
// Hotjar Site ID
const HOTJAR_SITE_ID = 5252734;

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics: Track page views on route changes
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
      {/* Google Analytics Script */}
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

      {/* Hotjar Script */}
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,s,q,u,a,r,e){
              c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
              c._hjSettings={hjid:${HOTJAR_SITE_ID},hjsv:6};
              r=s.getElementsByTagName('head')[0];
              e=s.createElement('script');e.async=1;
              e.src=q+c._hjSettings.hjid+u;
              r.appendChild(e);
            })(window,document,'https://static.hj.contentsquare.net/c/csq-','.js');
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
