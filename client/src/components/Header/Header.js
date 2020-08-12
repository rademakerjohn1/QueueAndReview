import React from 'react';
import { Jumbotron } from 'reactstrap';
import Navigation from '../Nav/Nav'
import './Header.css';

// Render jumbotron header with Navigation

function Header() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Queue and Review</h1>
        <p className="lead">Your personal album tracking application.</p>
        <Navigation />
      </Jumbotron>
    </div>
  );
};

export default Header;