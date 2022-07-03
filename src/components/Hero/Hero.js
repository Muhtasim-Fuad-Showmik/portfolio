import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I Am <br />
        Muhtasim Fuad Showmik
      </SectionTitle>
      <SectionText>
        I am an ordinary software developer with extraordinary goals. I am passionate about programming, and love pushing myself hard towards my maximum potential. I find learning new technology fun and creating new applications always fill me with pride.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;