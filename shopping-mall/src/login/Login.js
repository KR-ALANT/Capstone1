import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from'./Login.module.css';
import Header from '../header/Header.js'

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberId, setRememberId] = useState(false);
    
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberIdChange = (e) => {
        setRememberId(e.target.checked);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직 처리
        console.log('ID:', id);
        console.log('Password:', password);
        console.log('Remember Id:', rememberId);
    };
        
    return(
        /*사이트 전체*/
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div>
                    <div className = {styles.login}>
                        <p>LOGIN</p>
                    </div>
                    <div className = {styles.inputs}>
                        <form className={styles.all} onSubmit={handleSubmit}>
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
                                    type="password" 
                                    id="password" 
                                    value={password} 
                                    onChange={handlePasswordChange} 
                                    placeholder="Password" 
                                />
                            </div>
                            <div className={styles.middle_div}>
                                <div className={styles.checkbox}>
                                    <label className={styles.checkbox_text}>
                                        <input 
                                        type="checkbox" 
                                        checked={rememberId} 
                                        onChange={handleRememberIdChange} 
                                        style={{ marginRight: '7px' }}
                                        />
                                        <div className={styles.checkbox_text_1}>
                                            <p>auto login</p>
                                        </div>
                                    </label>
                                </div>
                                <div className = {styles.login_buttons}>
                                    <div className={styles.login_button}>
                                        <p>LOGIN</p>
                                    </div>
                                    <div className={styles.kakao_login_button}>
                                        <p>KAKAO LOGIN</p>
                                    </div>
                                </div>
                            </div>    
                            <div className={styles.forgot_buttons}>
                                <div className={styles. forgot_ID}>
                                    <a href="/ForgotID" className={styles.forgotB}><p>forgot ID?</p></a>
                                </div>
                                <div className={styles.between}>
                                    <p>/</p>
                                </div>
                                <div className={styles.forgot_PW}>
                                    <a href="/ForgotPW" className={styles.forgotB}><p>forgot PW?</p></a>
                                </div>
                            </div>
                            <div className={styles.create_account}>
                                <a href="/Join">
                                    <p>CREATE AN ACCOUNT</p>
                                </a>
                            </div>
                        </form>  
                    </div>   
                </div>       
            </main>
        </div>
    );
};

export default Login;