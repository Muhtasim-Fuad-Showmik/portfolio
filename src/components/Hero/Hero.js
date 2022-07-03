import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, NavLink } from './HeroStyles';

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
      <Button>
        <Link href="#about">
          <NavLink>Learn More</NavLink>
        </Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;