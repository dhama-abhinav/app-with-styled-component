import React, { useState } from "react";
import {
  HeroBackground,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElement";
import Video from ".././videos/video1.mp4";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "./ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBackground>
          <VideoBg muted autoPlay loop src={Video} type="video/mp4" />
        </HeroBackground>
        <HeroContent>
          <HeroH1>Virtual banking made easy</HeroH1>
          <HeroP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit expedita pariatur obcaecati enim
          </HeroP>
          <HeroButtonWrapper>
            <Button fontBig='true' primary='true' dark='true' to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForwardIcon /> : <ArrowRightAltIcon />}
            </Button>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
