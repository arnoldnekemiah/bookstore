import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Styles/NavBar.css';
import styles from './Styles/Component.module.css';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <header>
        <div className="header-container1">
          <div className="logo">Bookstore CMS</div>
          <nav>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  BOOKS
                </Link>
              </li>
              <li>
                <Link to="/Categories" className={styles.link}>
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
