import styled from 'styled-components';

type WrapperProps = {
  active?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#22262a')};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
      width: 300px;
      right: 0px;
      opacity: 1;
  `}
`;
