import React from 'react'

import { CloseIcons, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElement';

export const Sidebar = ({isOpen , toggle}) => {
    return (
        <>
            <SidebarContainer onClick={toggle} isOpen={isOpen} >
              <Icon>
                  <CloseIcons onClick={toggle} />
              </Icon>
              <SidebarWrapper>
                  <SidebarMenu>
                      <SidebarLink to='about' onClick={toggle}>
                          About
                      </SidebarLink>
                      <SidebarLink to='discover' onClick={toggle}>
                          Discover
                      </SidebarLink>
                      <SidebarLink to='services' onClick={toggle}>
                          Services
                      </SidebarLink>
                      <SidebarLink to='signup' onClick={toggle}>
                          SignUp
                      </SidebarLink>
                  </SidebarMenu>
              </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}
