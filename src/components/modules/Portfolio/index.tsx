import Container from 'components/ui/Container';
import { useTheme } from 'providers/ThemeProvider';
import { Wrapper, Details } from './styles'



const Portfolio = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
        <h1>Portfolio</h1>
        {/* TODO: Projects here */}
      </Details>
    </Wrapper>
  );
};

export default Portfolio;