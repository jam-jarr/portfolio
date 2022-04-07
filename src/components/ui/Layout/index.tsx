import { FC } from 'react';
import GlobalStyle from 'components/ui/GlobalStyle';
// import Footer from 'components/ui/theme/Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
