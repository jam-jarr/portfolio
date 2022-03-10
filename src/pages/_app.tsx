import Script from 'next/script';
import { AppProps } from 'next/app';
import ThemeProvider from 'providers/ThemeProvider';
import config from 'data/config';
import 'components/ui/fonts.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'data/next-seo.config';

const MyApp = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`}
      ></Script>
      <Script
        id="gtag"
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
        <DefaultSeo {...SEO}/>
        <Component {...pageProps} err={err} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
