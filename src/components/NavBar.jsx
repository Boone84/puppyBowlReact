// vite-project/src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/players/1">Single Player</Link>
    </div>
  );
};

export default NavBar;
