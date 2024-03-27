const config = {
  defaultTitle: 'Jamie Giarratana',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
      : 'http://localhost:3040',
  defaultDescription: 'I’m Jamie and I’m a Software Developer!',
  googleAnalyticsID: 'G-LYHXDKP9KS',
};

export default config;
