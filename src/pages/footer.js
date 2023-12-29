import React from 'react';
import styled from 'styled-components';
// import linkedinLogo from '/link.png';
// import githubLogo from '/github.png';


const FooterContainer = styled.footer`
  background-color: rgba(36, 16, 35, 0.7);
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* Position the footer at the bottom */
  bottom: 0; /* Align to the bottom */
  left: 0; /* Align to the left */
  right: 0; /* Align to the right */
  width: 100%; /* Set width to full viewport */
`;


const FooterText = styled.p`
  margin: 0;
`;

// const LinkedInLink = styled.a`
//   margin-top: 10px; /* Add some spacing */
//   color: white;
//   display: inline-block; /* Display the logo and text inline */
//   text-decoration: none; /* Remove underlines */
//   margin-bottom: 10px
// `;

// const LinkedInLogo = styled.img`
//   width: 24px; /* Adjust the width to fit your design */
//   margin-right: 8px; /* Add some spacing between the logo and text */
//   vertical-align: middle; /* Align the logo vertically with the text */
// `;

const Footer = () => {
  return (
    <FooterContainer>
      {/* <LinkedInLink href="https://github.com/annabelge7" target="_blank">
        <LinkedInLogo src={githubLogo} alt="GitHub Logo" />
      </LinkedInLink>
      
      <LinkedInLink href="https://www.linkedin.com/in/annabel-edwards-1302271a5/" target="_blank">
        <LinkedInLogo src={linkedinLogo} alt="LinkedIn Logo" />
      </LinkedInLink> */}

      <FooterText>&copy; {new Date().getFullYear()} Annabel Edwards</FooterText>
    </FooterContainer>
  );
};

export default Footer;