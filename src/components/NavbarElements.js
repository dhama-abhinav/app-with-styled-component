import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-top:-80px;
  z-index: 10;
  height: 80px;
  background-color: #252323;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  height: 80px;
  padding: 0 24px;
`;
export const NavLogo = styled(LinkR)`
  color: yellow;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.85rem;
  font-weight: bold;
  margin-left: 24px;
  text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  margin-top:30px;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.h4`
//    margin-left:5px;
  color: white;
  height: 80px;
  font-weight: 600;
  &:hover{
      color:lightgreen
  }
`;
export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 60%;
  padding: 10px;
  &.active {
    border-bottom: 3px solid green;
  }
`;

// export const NavMenuIcon = styled.div`
//  color:white
// `
export const NavMenuIcon = styled.div`
  color: white;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);

    cursor: pointer;
    font-size: 1.8rem;
  }
`;

// export const NavButton = styled.button`
// height:40px !important;
// margin-top:20px;
//   display: flex;
//   border-radius: 10px;
//   color: black;
//   white-space: nowrap;
//   font-size: 16px;
//   background: #01bf71;
//   aign-items: center;

//   @media and screen(max-width:768px) {
//     display: none;
//   }
// `;
// export const NavButtonLink = styled(LinkR)`
//   background: #01bf71;
//   border-radius: 10px;
//   color: black;
//   white-space: nowrap;
//   font-size: 16px;
//   font-weight: 800;
//   margin-top:10px;
//   margin-right:-150px;
//   padding: 10px 22px;
//   text-decoration: none;
//   outline: none;
//   border: none;
//   transition: all 0.2s ease-in-out;

//   @media and screen(max-width:768px) {
//     display: none;
//   }

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: red;
//     color: white;
//   }
// `;
