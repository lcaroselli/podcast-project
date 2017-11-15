import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import App from '../App/App';

const Header = () => {
  return (
    <div>
      <header>PodcastClubs</header>
      <nav>
        <NavLink activeClassName='selected' exact to='/' component={ App }>Home</NavLink>
      </nav>
    </div>
  )
}

export default Header;
