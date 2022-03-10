import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import Image from 'next/image';
import initials from 'assets/icons/initials-split.svg';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Wrapper as={Container}>
      <Link href="/" passHref>
        <Brand as="a" theme={theme}>
          <Image src={initials} alt="GG" layout="fill" objectFit="fill" />
        </Brand>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
