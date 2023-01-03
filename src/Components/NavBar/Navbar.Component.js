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
          <l1 className="navbar-page">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Web Designer
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Game Design
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  3D Artist
                </a>
              </li>
            </ul>
          </l1>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
