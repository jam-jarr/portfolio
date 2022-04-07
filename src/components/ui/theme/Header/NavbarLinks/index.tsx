import Link from 'next/link';
import { Wrapper } from './styles';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  return (
    <Wrapper desktop={desktop} >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="https://resume.realgib.com">
        <a target='_blank'>Resume</a>
      </Link>
    </Wrapper>
  );
};

export default NavbarLinks;
