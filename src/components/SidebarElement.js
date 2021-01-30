import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
   position:fixed;
   z-index:999;
   width:50%;
   height:100%;
   background:#252323;
    display:grid;
    align-items:center;
    top:0px ;
    right: -100%;
    
   transition: 0.3s ease-in-out;
   opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
   right : ${({ isOpen }) => (isOpen ? "0" : "-100%")}
   
`;

export const CloseIcons = styled(CloseIcon)`
  color: white;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  background: transparent;
  font-size: 2rem;
  right: 1.5rem;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`;
export const SidebarWrapper = styled.div`
  color: black;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700;
  cursor: pointer;
  opacity:1;

  &:hover {
    color: lightgreen;
    opacity:1.3;
  }
`;
export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;

`;
