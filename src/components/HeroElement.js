import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-item: center;
  height: 800px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;
export const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:red;
  
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
 position:absolute;
 display:flex;
 flex-direction:column;
 align-items:center;
 max-width:1200px;
 padding: 8px 24px;
 z-index:3;

`
export const HeroH1 =styled.h1`
 color: white;
 font-size:50px;
 text-align:center;
 margin-top:300px;

 @media screen and (max-width: 768px){
  font-size:40px;
 }
 @media screen and (max-width: 480px){
  font-size:32px;
 }
`
export const HeroP =styled.p`
 margin-top:20px;
 color: white;
 font-size:25px;
 text-align:center;
 max-width:600px;

 @media screen and (max-width: 768px){
  font-size:19px;
 }
 @media screen and (max-width: 480px){
  font-size:14px;
 }
 
`

export const HeroButtonWrapper =styled.div`
 margin-top:30px;
 display:flex;
 flex-direction:column;
 align-items:center;
`



















