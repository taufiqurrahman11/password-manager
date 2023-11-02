import React from 'react';
import { Link } from 'react-router-dom';
import styleNav from '../style/nav.module.scss';

const Navbar = () => {
  return (
    <div className={styleNav.container}>
        <Link to='/'>
            <h2>Password Manager</h2>
        </Link>
        <nav className={styleNav.nav}>
            <ul>
                <li className={styleNav.li}>
                <Link to="/work">Work</Link>
                </li>
                <li className={styleNav.li}>
                <Link to="/family">Family</Link>
                </li>
                <li className={styleNav.li}>
                <Link to="/personal">Personal</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
