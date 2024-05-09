import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Grew up thinking programmers only code with 1s and 0s, until one fateful
        day a promotional email from Sololearn's free fundamental development
        courses was all it took for me to get hooked into the world of software
        development.
        <br />
        <br />I pursued my Bachelor's degree from United International
        University and graduated with almost perfect grades (
        <strong>3.98</strong>) and set off on my journey to develop skills as a
        programmer and make the most of my potential on this field.
        <br />
        <br />
        Hard work is necessary for keeping up in the tech world, but I love my
        career choice because at least for this line of work, hard work is fun
        for me. I love knowing that I can sit on a computer and build anything I
        want. The skills empower me, and I am very very proud of my line of
        work.
        <br />
        <br />
        I have worked as a Research Consultant (Junior Programmer) at CEGIS for
        two years and this has been my first job since graduation. I got
        accustomed to all kinds of projects here including legacy projects from
        10 years back to very modern international projects working under
        reknowned organizations such as UNDP. Juggling between different tech
        stacks was a norm here and it was fun and never got old.
        <br />
        <br />
        In 2022, I switched my job and joined as a Senior Developer at Schertech
        and was later promoted to the position of Deputy Team Lead in the year
        2023. This was a breath of fresh air for me. There were tough challenges
        for me to face here, and opportunities for more research and complex
        client requirements. I had more room to grow here as a developer as well
        as a leader. Understanding delays and optimizing task distribution on
        each sprint while maintaining quality using automated tests and
        sometimes other more urgent strategies to keep the clients happy and the
        company name shining as a symbol for the Italians kept me always rushing
        on my feet. Also, researching possibilities of integration with React,
        Vue and Angular components with SAP's CAPire backend lacked its
        resources and therefore required more investment from my brain, which
        has been enjoyable in its own way.
        <br />
        <br />
        In 2024, I joined Zolo Inc as a Senior Programmer. My first brush with
        the startup world. Felt like suddenly lifting a mountain on my
        shoulders. I was responsible for leading the development team and build
        the application from scratch. I had to know everything the project
        required and I if there were something I was missing I had to learn it
        faster than ever. And I loved every second of it. This was the peak of
        my growth as a developer.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                        gradientUnits="userSpaceOnUse"
                      >
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
