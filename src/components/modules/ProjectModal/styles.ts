import styled from 'styled-components';

type ConditionalThemed = {
  show?: boolean;
  theme?: string;
};

export const Overlay = styled.div<ConditionalThemed>`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 350ms;

  ${({ show }) =>
    show &&
    `
      visibility: visible;
      opacity: 1;
  `}
`;

export const Wrapper = styled.div<ConditionalThemed>`
  position: fixed;
  display: block;
  box-shadow: 0 0 10px black;
  background: #32363d;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 370px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 0.2s;
  border-radius: 50px;
  @media (max-width: 1100px) {
    width: 85%;
    height: 85%;
  }
`;

export const ProjectImage = styled.div`
  width: 40%;
  height: 100%;
  background: #222327;
  margin: 0;
  padding: 0;
  display: inline-block;
  border-radius: inherit;

  @media (max-width: 1100px) {
    width: 100%;
    height: 40%;
  }
`;

export const Details = styled.div`
  box-sizing: inherit;
`;

export const DetailsWrapper = styled.div`
  @media (max-width: 1100px) {
    width: 100%;
    height: 55%;
  }
  height: 100%;
  width: 60%;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 15px;
`;

export const Close = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const Tag = styled.li`
  display: inline-block;
  margin: 0.5rem;
  border: 1px solid #94a4b4;
  padding: 0.3rem;
  color: #94a4b4;
  font-weight: normal;
  letter-spacing: 1px;
  font-size: 0.8rem;
  text-align: center;
  font-family: "AzeretMono";
  font-style: italic;
  span {
    vertical-align: middle;
    line-height: normal;
    text-align: center;
  }
`;

export const Tags = styled.ul`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
`;

export const About = styled.div`
  color: #94a4b4;
  height: auto;
  h3 {
    color: white;
    margin-bottom: 0.8rem;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: "#fff";
  color: "#000";
  padding: 0.15rem 0.65rem;
  font-family: "AzeretMono";
  border: 0;
  border-radius: 3px;
  margin: 0 15px;

  &:disabled {
    pointer-events: none;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  bottom: 10px;
`;

export const ButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Thumbnail = styled.div`
  div {
    margin: 45px !important;
  }
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Link = styled.a`
  color: inherit;
`;
