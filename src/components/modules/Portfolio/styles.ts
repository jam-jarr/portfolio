import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    padding: unset;
    max-width: 85%;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding: 2rem;
  padding-bottom: 0;
  margin: auto;
  h1 {
    font-size: 32pt;
    color: #fff;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: block;
  position: relative;
  padding: 3%;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px black;
  max-height: 230px;
  width: 40%;
  height: 100vh;
  transition: all 0.3s;
  background: #222327;
  border-radius: 20px;
  
  &:hover {
    transform: scale(1.1);
    border-radius: 60px;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const Thumbnail = styled.div`
  div {
    margin: 15px !important;
  }
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ViewProject = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  left: 0;
  top: 0;
  cursor: pointer;
  opacity: 0;
  font-size: 1rem;
  user-select: none;
  border-radius: inherit;

  &:hover {
    font-size: 1.5rem;
    opacity: 1;
    box-shadow: inset 0 0 100px black;
    background: rgba(0, 0, 0, 0.2);
  }
`;
