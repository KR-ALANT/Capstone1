import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    return (
        <div>
            <header>
                <div className="menu-bar">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <nav className="menu">
                        <label htmlFor="menu-toggle" className="close-icon">X</label>
                        <div className="menu-bottom">
                            <div className="shop">
                                <span className="main-category">SHOP</span>
                                <a href="#" className="sub-category">All</a>
                                <a href="#" className="sub-category">Best</a>
                                <a href="#" className="sub-category">New</a>
                                <a href="#" className="sub-category">Outer</a>
                                <a href="#" className="sub-category">Top</a>
                                <a href="#" className="sub-category">Bottom</a>
                                <a href="#" className="sub-category">Etc</a>
                            </div>
                            <div className="company">
                                <span className="main-category">Q&A</span>
                                <Link to="/ask" className="sub-category">Ask</Link>
                                <a href="/faq" className="sub-category">FAQ</a>
                            </div>
                        </div>
                    </nav>
                </div>
                    <a href='/' className='main'>
                        <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className="logo" />
                    </a>
                <div className="header-icons">
                    <a href="#" className="icon">join</a>
                    <a href="/Login" className="icon">login</a>
                    <a href="/MyPage" className="icon" >mypage</a>
                    <a href="#" className="icon" onClick={toggleSearch}>search</a>
                    <a href="/Cart" className="icon">cart</a>
                </div>
            </header>
            <div className={`search-bar ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-btn">Search</button>
                <button className="back-btn" onClick={toggleSearch}>Back</button>
            </div>
        </div>
    );
};

export default Header;