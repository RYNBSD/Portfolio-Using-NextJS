import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main cnter>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;