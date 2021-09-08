import styled from 'styled-components'

type ConditionalThemed = {
  show?: boolean;
  theme?: string;
}

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
  background: #32363D;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 40%;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 0.2s;

  @media (max-width: 1100px) {
    width: 85%;
    height: 85%;
  }
`

export const ProjectImage = styled.div`
  width: 40%;
  height: 100%;
  background: #222327;
  margin: 0;
  padding: 0;
  display: inline-block;

  @media (max-width: 1100px) {
    width: 100%;
    height: 40%;
  }
`

export const Details = styled.div`
padding: 15px;
`

export const DetailsWrapper = styled.div`
  @media (max-width: 1100px) {
    width: 100%;
  }
  width: 60%;
  display: inline-block;
  vertical-align: top;
`

export const Close = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`

export const Tag = styled.li`
  display: inline-block;
  margin: .5rem;
  border: 1px solid #94a4b4;
  padding: .3rem;
  color: #94a4b4;
  font-weight: normal;
  letter-spacing: 1px;
  font-size: .8rem;
  text-align: center;
  font-family: 'AzeretMono';
  font-style: italic;
  span {
    vertical-align: middle;
    line-height: normal;
    text-align: center;
  }
`

export const Tags = styled.ul`
  margin: 0;
  margin-bottom: 1.45rem;
  padding: 0;
`

export const About = styled.div`
  color: #94a4b4;
  overflow-y: auto;
  height: auto;
  h3 {
    color: white;
    margin-bottom: .8rem;
  }
`