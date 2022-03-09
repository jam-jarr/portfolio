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
          <div>
            <Link href="/projects" passHref>
              <Button as="a" style={{ marginRight: '1rem' }}>
                View Projects
              </Button>
            </Link>
            <Link href="https://resume.realgib.com" passHref>
              <Button as="a" target="_blank" secondary>
                View Resume
              </Button>
            </Link>
          </div>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
