import Link from 'next/link';
import Container from 'components/ui/Container';
import { Wrapper, IntroWrapper, Details, Buttons, FlexButton } from './styles';

const Intro = () => {
  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details>
          <h1>I’m Gabe and I’m a Software Developer!</h1>
          <Buttons>
            <Link href="/projects" passHref>
              <FlexButton as="a">View Projects</FlexButton>
            </Link>
            <FlexButton
              as="a"
              target="_blank"
              href="/assets/files/Resume.pdf"
              download
              secondary
            >
              View Resume
            </FlexButton>
          </Buttons>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
