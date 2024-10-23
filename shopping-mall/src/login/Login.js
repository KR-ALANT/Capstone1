import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./Login.module.css';

const Login = () => {
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const navigate = useNavigate();

    const MyPage = () =>{
        navigate("/MyPage")
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직 처리
        console.log('ID:', id);
        console.log('Password:', password);
    };
        
    return(
        /*사이트 전체*/
        <div className={styles["back-img"]}>
            <header>
                <div className={styles["menu-bar"]}>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className={styles["menu-icon"]}>&#9776;</label>
                    <nav className="menu">
                        <label htmlFor="menu-toggle" className={styles["close-icon"]}>X</label>
                        <div className={styles["menu-bottom"]}>
                            <div className={styles["shop"]}>
                                <span className={styles["main-category"]}>SHOP</span>
                                <a href="#" className={styles["sub-category"]}>All</a>
                                <a href="#" className={styles["sub-category"]}>Best</a>
                                <a href="#" className={styles["sub-category"]}>New</a>
                                <a href="#" className={styles["sub-category"]}>Outer</a>
                                <a href="#" className={styles["sub-category"]}>Top</a>
                                <a href="#" className={styles["sub-category"]}>Bottom</a>
                                <a href="#" className={styles["sub-category"]}>Etc</a>
                            </div>
                            <div className={styles.company}>
                                <span className={styles["main-category"]}>Q&A</span>
                                <Link to="/ask" className={styles["sub-category"]}>Ask</Link>
                                <a href="#" className={styles["sub-category"]}>FAQ</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className={styles.logo} />
                <div className={styles["header-icons"]}>
                    <a href="#" className={styles.icon}>join</a>
                    <a href="#" className={styles.icon}>login</a>
                    <a href="#" className={styles.icon} onClick={MyPage}>mypage</a>
                    <a href="#" className={styles.icon} onClick={toggleSearch}>search</a>
                    <a href="#" className={styles.icon}>cart</a>
                </div>
            </header>
            <div className={`search-bar ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." className={styles["search-input"]} />
                <button className={styles["search-btn"]}>Search</button>
                <button className={styles["back-btn"]} onClick={toggleSearch}>Back</button>
            </div>
            <main>
                <div className = {styles.login}>
                    <p>Login</p>
                </div>
                <div className = {styles.inputs}>
                    <form onSubmit={handleSubmit}>
                        <div className = {styles.login_input}>
                            <input 
                                type="text" 
                                id="id" 
                                value={id} 
                                onChange={handleIdChange} 
                                placeholder="ID" 
                            />
                        </div>
                        <div className = {styles.passward_input}>
                            <input 
                                type="text" 
                                id="password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                placeholder="Password" 
                            />
                        </div>
                    </form>    
                </div>
                <div>
                    
                </div>
            </main>
        </div>
    );
};

export default Login;