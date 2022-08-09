import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall, DiDocker } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Due to the nature of my job, I have had to work with a range of 
      technologies for developing applications based on client needs. 
      But even beyond that, my curiosity and passion for tech has led 
      me to learn and use even more languages, frameworks and tools in 
      order for me to keep up with the modern tech in demand.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js and Angular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, ASP .Net Core, and PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB, MySQL and Oracle
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Docker and Nexus Repository
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
