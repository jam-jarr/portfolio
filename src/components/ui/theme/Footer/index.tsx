import {
  Wrapper,
  Flex,
  Details,
  Contacts,
  FooterContact,
  FooterItem,
} from './styles';

const Footer = () => (
  <Wrapper>
    <Details>
      <Flex>
        <FooterContact>
          <FooterItem>
            Email:&nbsp;
            <Contacts
              href="mailto:jamie.giarratana@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              jamie.giarratana@gmail.com
            </Contacts>
          </FooterItem>
          <FooterItem>
            Phone:&nbsp;
            <Contacts
              href="tel:+14792492441"
              rel="noopener noreferrer"
              target="_blank"
            >
              +1 (479) 249-2441
            </Contacts>
          </FooterItem>
        </FooterContact>
      </Flex>
    </Details>
  </Wrapper>
);

export default Footer;
