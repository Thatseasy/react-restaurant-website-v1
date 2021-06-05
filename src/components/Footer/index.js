import React from 'react';
import {
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>A Transmontana</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/Transmontana/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/restaurante_a_transmonta/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
