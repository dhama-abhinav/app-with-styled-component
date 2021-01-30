import React from "react";
import { Button } from "react-scroll";
import {
    ButtonWrap,
    Column1,
    Column2,
    Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
} from "./InfoSectionElements";

export const InfoSection = () => {
  return (
    <>
      <InfoContainer >
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>Top Line</TextWrapper>
              <Heading>Heading</Heading>
              <Subtitle>subtitle</Subtitle>
              <ButtonWrap>
                <Button to="home">button </Button>
              </ButtonWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
