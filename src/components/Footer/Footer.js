import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+8801749135046">+8801749135046</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:muhtasimfuadshowmik@gmail.com">muhtasimfuadshowmik@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>All knowledge is connected to all other knowledge. The fun is in making the connections.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Muhtasim-Fuad-Showmik">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/muhtasim-fuad-showmik-8b3ab31aa/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          {/* <SocialIcons href="https://www.facebook.com/profile.php?id=100013544732101">
            <AiFillFacebook size="3rem"/>
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
