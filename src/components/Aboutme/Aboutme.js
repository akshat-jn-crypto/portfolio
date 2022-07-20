import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';

const Aboutme = () => {
return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      It's my pleasure to introduce my self..well, I'm parsuing my B-Tech in stream of Electronics and Communication engineering with specialization in internet of things from
                NSUT. I'm a district level TT player. My strengths are my attitude that i like to take challenges that I CAN do it,my way of thinking that i 
                take both success and failure in a balanced manner..
      </SectionText>
      <SectionDivider />
    </Section>
  );
};