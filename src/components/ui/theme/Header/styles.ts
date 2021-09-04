import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#22262a')};
  width: 100%;
  position: sticky;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.6) 2px 0px 20px 0px;
`;

type OverlayProps = {
  sidebar?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
      opacity: 100;
      z-index: 4;  
  `}
`;
