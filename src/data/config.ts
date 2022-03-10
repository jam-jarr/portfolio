const config = {
  defaultTitle: 'Gabriel Giarratana',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
      : 'http://localhost:3040',
  defaultDescription: 'I’m Gabe and I’m a Software Developer!',
  googleAnalyticsID: 'G-LYHXDKP9KS',
};

export default config;
