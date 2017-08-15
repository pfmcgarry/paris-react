import React from 'react';
import MediaQuery from 'react-responsive';
import NavItem from './NavItem';

import './Nav.css';


class Nav extends React.Component {
  render() { 
    
    return ( 
      <div>
        <div className="headline">"Providing quality, value and care since 1993"</div>
        <div className="nav">
          <NavItem id="book" route="/book" icon="./book.svg" label="book online"/>
          <NavItem id="team" route="/team" icon="./team.svg" label="our team"/>
          <NavItem id="salon" route="/salon" icon="./salon.svg" label="the salon"/>
          <NavItem id="news" route="/news" icon="./news.svg" label="news"/>
          <NavItem id="contact" route="/contact" icon="./location.svg" label="contact us"/>
        </div>
      </div>
    )
  }
}
export default Nav;