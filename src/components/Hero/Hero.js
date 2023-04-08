import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        Hey there, I'm Gowshik, an aspiring electronics engineer with skills in embedded systems, VLSI, and front-end development. I love building innovative projects and am always looking for new challenges to tackle. When I'm not tinkering with electronics, you can find me exploring the great outdoors or developing new websites. Thanks for stopping by!




        <SectionText>

        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;