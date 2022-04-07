import Button from 'components/ui/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #fff;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #e6e6e6;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }

`;

export const FlexButton = styled(Button)`
  margin-bottom: 1rem;
  margin-right: 1rem;
`;
