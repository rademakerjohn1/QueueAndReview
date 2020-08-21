import React, { useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css'

// Render Navigation section with Search, Queue, and Library components

function Navigation() {

  let pathname = window.location.pathname;

  return (
      <Nav>
        <NavItem className={pathname === "/search" ? "active" : null}>
            <NavLink href="/search">Search</NavLink> 
        </NavItem>
        <NavItem className={(pathname === "/queue" || pathname === "/") ? "active" : null}>
            <NavLink href="/queue">Queue</NavLink>
        </NavItem>
        <NavItem className={pathname === "/library" ? "active" : null}>
            <NavLink href="/library">Library</NavLink>
        </NavItem>
      </Nav>
  );
}

export default Navigation;