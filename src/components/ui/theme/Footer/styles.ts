import styled from 'styled-components';

export const Wrapper = styled.footer`
  // position: absolute;
  bottom: 0;
  position: fixed;
  background-color: #17191c;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const Details = styled.div`
  font-family: 'Inconsolata',sans-serif;
`;

export const FooterItem = styled.div`
  color: #40464f;
  font-size: .9rem;
  padding: .3rem 1rem;
  text-align: center;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Link = styled.a`
  color: white;
`;

