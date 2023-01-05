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
                <a id="nav-all" class="dropdown-item">
                  All
                </a>
              </li>
              <li>
                <Link class="dropdown-item disabled" to="/Curriculum/Web">
                  Web Designer
                </Link>
              </li>
              <li>
                <Link class="dropdown-item disabled" to="/Curriculum/GD">
                  Game Design
                </Link>
              </li>
              <li>
                <Link class="dropdown-item disabled" to="/Curriculum/3D">
                  3D Artist
                </Link>
              </li>
            </ul>
          </l1>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
