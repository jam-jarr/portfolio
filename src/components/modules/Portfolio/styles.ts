import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 4rem;
  justify-content: center;
  align-items: center;
`

type DetailsProps = {
  theme?: string;
}

export const Details = styled.div<DetailsProps>`
  flex: 1;
  width: 85%;
  margin: auto;
  h1 {
    font-size: 32pt;
    color: ${({ theme }) => (theme === 'light' ? '#22262a' : '#fff')};
  }
`