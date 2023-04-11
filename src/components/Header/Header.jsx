import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/download.png'

const Header = () => {
    return (
        <nav className='header'>
            <div className="header-main">
                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                    <a href="#">CareerGuide</a>
                </div>

                <div className="header-nav">
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied">Applied job</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <button className='btn-apply'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;