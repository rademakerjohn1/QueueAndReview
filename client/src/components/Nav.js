import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css'

function Navigation() {
  return (
      <Nav>
        <NavItem>
            <NavLink href="/">Search</NavLink> 
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