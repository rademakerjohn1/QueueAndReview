import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Header.css';

// Render jumbotron header

function Header() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Queue and Review</h1>
        <p className="lead">Your personal album tracking application.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;