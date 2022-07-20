import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span, SPan} from './HeroStyles';

const Hero = (props) => (
  <> 
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <Span>Hi,</Span><br />
          <SPan>I'm Akshat Jain</SPan>
        </SectionTitle>
        <SectionText>
        Full time tech enthusiast and part-time developer on the journey to hone my skills to the next level 
        and build awesome apps.
        </SectionText>
        <Button onClick = {() => window.location = 'https://wa.me/+919958424441/?'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;