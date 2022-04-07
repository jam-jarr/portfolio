import Link from 'next/link';
import Container from 'components/ui/Container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import Image from 'next/image';
import initials from 'assets/icons/initials-split.svg';

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Link href="/" passHref>
        <Brand as="a" >
          <Image src={initials} alt="GG" layout="fill" objectFit="fill" />
        </Brand>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
