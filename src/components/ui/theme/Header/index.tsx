import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';
import { useTheme } from 'providers/ThemeProvider';

const Header = () => {
  const [sidebar, toggle] = useState(false);
  const { theme } = useTheme();

  return (
    <Wrapper theme={theme}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={() => toggle(!sidebar)} />
    </Wrapper>
  );
};

export default Header;
