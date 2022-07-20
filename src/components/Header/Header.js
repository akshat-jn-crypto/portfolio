import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiAppcelerator, DiCssdeck, DiNancy } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginLeft: '40;'}}>
          <DiNancy size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/akshat-jn-crypto">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/akshat-jain-14936a123?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BG1B5wZJQQR6L0TkOAtV2Lw%3D%3D">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/Akshat_jn?t=sFEN1XDqz0m0VzeE1eBUMQ&s=09">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
