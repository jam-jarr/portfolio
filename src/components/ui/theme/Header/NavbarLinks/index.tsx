import Link from 'next/link';
import { Wrapper } from './styles';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  return (
    <Wrapper desktop={desktop}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <a href="/assets/files/Resume.pdf" target="_blank" download>
        Resume
      </a>
    </Wrapper>
  );
};

export default NavbarLinks;
