import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I grew up wanting to be many things. So many career options intrigued 
        me. From pilot to doctor to architect to aeronautical engineer to finally
        software developer. While each of my career choices came from inspirational
        people around me, the final choice oddly enough came from an email which 
        included an advertisement for the educational platform "Sololearn" where 
        anyone could learn a programming language for free. The ad focused on Python 
        and how large organizations used this language and I was curious.<br /><br />
        
        I fell for the ad, signed up on their website, and I was hooked. Programming 
        is fun and I had decided that this will be my career for eternity. So I pursued 
        my Bachelor's degree from United International University and graduated with 
        almost perfect grades and set off on my journey to develop skills as a programmer 
        and make the most of my potential on this field.<br /><br />

        Hard work is necessary for keeping up in the tech world, but I love my career 
        choice because at least for this line of work, hard work is fun for me. I love 
        knowing that I can sit on a computer and build anything I want for free. The skills 
        empower me, and I am very very proud of my line of work.<br /><br />

        I have worked as a Research Consultant (Junior Programmer) at CEGIS for 
        two years and this has been my first job since graduation. Work here can 
        be relaxing on some days and challenging on another. My daily tasks vary 
        greatly based on the projects the company acquire and the responsibilities 
        that are laid on to me. Deadlines are often set to be too close for comfort, 
        and at times I had to learn a different tech in very short periods of time. 
        My toughest challenge so far has been to learn Cake PHP 2 within 3 days and 
        begin working on a project that was developed 10 years prior to my appointment 
        to the project. Scavenging through outdated resources and tutorials was new to 
        me but was interesting at the same time. Googling around and matching stack 
        overflow suggestions to the version of my project and finding solutions from 
        the past that would work for this rather ancient project was tough but rewarding 
        in the end.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;