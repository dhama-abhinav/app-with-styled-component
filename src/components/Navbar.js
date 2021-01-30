import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavButton,
  NavMenuIcon,
} from "./NavbarElements";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import DiscFullIcon from "@material-ui/icons/DiscFull";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

export const Navbar = ({toggle}) => {
    
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/"> abc </NavLogo>
        <NavMenuIcon>
          <MenuIcon onClick={toggle} />
        </NavMenuIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">
              <HomeIcon /> About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">
              <DiscFullIcon /> Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">
              <RoomServiceIcon /> Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">
              <VpnKeyIcon /> Sign Up
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};
