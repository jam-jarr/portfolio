import Link from 'next/link';
import Container from 'components/ui/Container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import Image from 'next/image';
import initials from 'assets/icons/jg_inconsolata.svg';

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Link href="/" passHref>
        <Brand>
          <Image src={initials} alt="JG" layout="fill" objectFit="fill" />
        </Brand>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
