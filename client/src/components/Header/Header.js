import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Header.css';

// Render jumbotron header

function Header(props) {
  return (
      <Jumbotron className={props.loggedIn && "user-header"}>
        <h1 className="display-3">Queue and Review</h1>
        <p className="lead">Your personal album tracking application.</p>
        {props.children}
      </Jumbotron>
  );
};

export default Header;