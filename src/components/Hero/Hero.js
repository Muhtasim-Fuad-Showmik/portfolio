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
        A dedicated software engineer driven by a passion for crafting innovative solutions and continuously expanding technical expertise. I am committed to pushing the boundaries of what's possible in software development.
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