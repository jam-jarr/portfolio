import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import config from 'data/config';
import 'components/ui/fonts.css';

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     (window as any).gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`}
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.googleAnalyticsID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ThemeProvider>
        <Component {...pageProps} err={err} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
