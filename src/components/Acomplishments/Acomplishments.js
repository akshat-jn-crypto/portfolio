import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Cpp', text: 'Proficient',index:0,},
  { number: 'Qt Software', text: 'Intermediate', index:1,},
  { number: 'JavaScript', text: 'Intermediate', index:2,},
  { number: 'Python', text: 'Intermediate', index:3,}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Languages</SectionTitle>
    <Boxes>
      {data.map(({number,text,index}) => (
        <Box key={index}>
          <BoxNum>{number}</BoxNum>
          <BoxText>{text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
