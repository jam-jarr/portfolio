import eye from 'assets/icons/eye.svg';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  margin-right: 7px;
`;

const DemoIcon = () => {
  return (
  <Wrapper>
    <Image src={eye} alt="Demo Icon" layout="fixed" width="20px" height="20px"/>
  </Wrapper>
  );
};

export default DemoIcon;
