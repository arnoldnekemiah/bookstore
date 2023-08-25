import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/NavBar.css';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <header>
        <div className="header-container1">
          <div className="logo">Bookstore CMS</div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="cat">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link to="/Categories" className="cat blur">
                  CATEGORIES
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-container2">
          <FaUserCircle />
        </div>
      </header>
    </div>
  );
}

export default NavigationBar;
