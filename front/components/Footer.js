import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  
  color: #007;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>NRJ 2021 All Rights Reserved</p>
      
    </FooterSection>
  );
};

export default Footer;