import React, { useRef } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {

  const myRef = useRef();


  // run this function from an event handler or an effect to execute scroll 



  return (


    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>

        <SidebarLink to='/menu'>Menu Card</SidebarLink>
        <SidebarLink to='/gallery'>Gallery</SidebarLink>
        <SidebarLink to='/about'>About Us</SidebarLink>
        <SidebarLink to='/contact'>Contact</SidebarLink>

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Reservation</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
