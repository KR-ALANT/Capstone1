import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./Login.module.css';
import Header from '../header/Header.js'

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
            <Header />
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
                <div className = {styles.check_box}>
                    
                </div>
            </main>
        </div>
    );
};

export default Login;