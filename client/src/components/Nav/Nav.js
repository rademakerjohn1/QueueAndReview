import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css'

// Render Navigation section with Search, Queue, and Library components

function Navigation() {
  return (
      <Nav>
        <NavItem>
            <NavLink href="/search">Search</NavLink> 
        </NavItem>
        <NavItem>
            <NavLink href="/queue">Queue</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/library">Library</NavLink>
        </NavItem>
      </Nav>
  );
}

export default Navigation;