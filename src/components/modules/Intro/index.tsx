import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import { Wrapper, IntroWrapper, Details } from './styles';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>I’m Gabe and I’m a Software Developer!</h1>
          <Link href="/projects" passHref>
            <Button as="a">View Projects</Button>
          </Link>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
