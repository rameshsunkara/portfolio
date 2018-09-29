import React from 'react';

import config from '../config';

import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, A, P, Ul } from '../style';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 8px;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled(Ul)`
  ${mixins.flexBetween};
`;
const SocialItem = styled.li``;
const SocialLink = styled(A)`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled(P)`
  margin: 5px 0 3px;
  font-size: ${theme.fontSizes.xsmall};
`;
const GithubLink = styled(A)`
  ${mixins.inlineLink};
  padding-left: 3px;
  color: ${theme.colors.lightGrey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.xxsmall};
  &:after {
    display: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {config.socialMedia &&
          config.socialMedia.map((social, i) => (
            <SocialItem key={i}>
              <SocialLink
                href={social.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={social.name}>
                {social.name === 'Github' ? (
                  <IconGithub />
                ) : social.name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : social.name === 'Codepen' ? (
                  <IconCodepen />
                ) : social.name === 'Instagram' ? (
                  <IconInstagram />
                ) : social.name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </SocialItem>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      Built using this
      <GithubLink
        href="https://github.com/rameshsunkara/portfolio"
        target="_blank"
        rel="nofollow noopener noreferrer">
        fork
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
