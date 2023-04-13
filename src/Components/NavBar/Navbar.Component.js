import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar-list">
          <l1 className="navbar-page">
            <Link className="link-list" to="/">
              Home
            </Link>
          </l1>
          <l1 className="navbar-page">
            <Link className="link-list" to="/Curriculum">
              CV
            </Link>
          </l1>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
