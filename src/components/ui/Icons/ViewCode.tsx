import viewCode from 'assets/icons/viewCode.svg';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-right: 7px;
`;

const ViewCode = () => {
  return (
    <Wrapper>
      <Image src={viewCode} alt="View Code Icon" layout="fixed" width="25px" height="25px"/>
    </Wrapper>
  );
};

export default ViewCode;
