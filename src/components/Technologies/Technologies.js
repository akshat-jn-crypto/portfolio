import React from 'react';
import { DiPython, DiReact, DiDocker } from 'react-icons/di';
import { FaDatabase, FaChartBar } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      From ML & AI to cloud infrastructure — building data-driven products at scale.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ML & AI</ListTitle>
          <ListParagraph>
            PyTorch, TensorFlow, <br />
            Scikit-learn, LLMs, NLP, <br />
            Transformers, Computer Vision
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>
            PySpark, Hive, Hadoop, <br />
            Pandas, NumPy, SQL, <br />
            SAS, Time-Series Analysis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            AWS (S3, Bedrock, Lambda, <br />
            OpenSearch), Docker, <br />
            LangChain, MLOps, RAG
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            React, Node.js, Express, <br />
            MongoDB, JavaScript, <br />
            REST APIs, JWT Auth
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaChartBar size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Visualization</ListTitle>
          <ListParagraph>
            Power BI, Matplotlib, <br />
            Seaborn, Dashboard Design, <br />
            Excel, Reporting
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
