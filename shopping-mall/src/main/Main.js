import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchInput, setSearchInput] = useState(''); // 검색 입력 상태 추가

    const toggleSearch = () => {
        setSearchActive(!searchActive);
        if (!searchActive) {
            setSearchInput(''); // 검색란 초기화
        }
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        // 검색 처리 로직 추가 (필요한 경우)
        console.log('Searching for:', searchInput);
        setSearchInput(''); // 검색 후 초기화 (선택 사항)
    };

    const navigate = useNavigate();

    return (
        <div className="back-img"
     style={{
         backgroundImage: `url(${process.env.PUBLIC_URL}/image/back.jpg)`,
         backgroundSize: 'cover',
         height: '100vh',
         overflow: 'hidden'
     }}>
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
                                <a href="Ask" className="sub-category">Ask</a>
                                <a href="Faq" className="sub-category">Faq</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className="logo" />
                </Link>
                <div className="header-icons">
                    <a href="#" className="icon">join</a>
                    <a href="#" className="icon">login</a>
                    <a href="MyPage" className="icon">mypage</a>
                    <a href="#" className="icon" onClick={toggleSearch}>search</a>
                    <a href="#" className="icon">cart</a>
                </div>
            </header>
            <div className={`search-bar ${searchActive ? 'active' : ''}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={searchInput}
                    onChange={handleInputChange} // 입력 변화 처리
                />
                <button className="search-btn" onClick={handleSearch}>Search</button>
                <button className="back-btn" onClick={toggleSearch}>Back</button>
            </div>
            <main>
            </main>
        </div>
    );
};

export default Main;