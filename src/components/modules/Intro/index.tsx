import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import { Wrapper, IntroWrapper, Details, Buttons, FlexButton } from './styles';

const Intro = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>I’m Gabe and I’m a Software Developer!</h1>
          <Buttons>
            <Link href="/projects" passHref>
              <FlexButton as="a">
                View Projects
              </FlexButton>
            </Link>
            <Link href="https://resume.realgib.com" passHref>
              <FlexButton as="a" target="_blank" secondary>
                View Resume
              </FlexButton>
            </Link>
          </Buttons>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
