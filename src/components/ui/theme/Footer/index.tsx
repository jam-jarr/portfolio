import { Wrapper, Flex, Details, Link, FooterContact, FooterItem } from './styles';

const Footer = () => (
  <Wrapper>
    <Details>
      <Flex>
        <FooterItem>
          © {new Date().getFullYear()} | Gabriel Giarratana | All Rights Reserved.
        </FooterItem>
        <FooterContact>
          <FooterItem>
            Email:&nbsp;
            <Link href='mailto:gabriel.giarratana@gmail.com' rel="noopener noreferrer" target="_blank">
              gabriel.giarratana@gmail.com
            </Link>
          </FooterItem>
          <FooterItem>
            Phone:&nbsp;
            <Link href='tel:+14792492441' rel="noopener noreferrer" target="_blank">
              +1 (479) 249-2441
            </Link>
          </FooterItem>
        </FooterContact>

      </Flex>
    </Details>
  </Wrapper >
);

export default Footer;
