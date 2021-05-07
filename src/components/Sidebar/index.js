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

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll 



  return (


    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>

        <SidebarLink to='/menu'>Menu Card</SidebarLink>
        <SidebarLink to='/'>Gallery</SidebarLink>
        <SidebarLink to='/'>Contact</SidebarLink>
        <SidebarLink to='/contact'>Contact</SidebarLink>

      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
