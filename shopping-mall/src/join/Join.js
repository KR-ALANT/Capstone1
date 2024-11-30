import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from'./Join.module.css';
import Header from '../header/Header.js'

const Join = () => {
    const [id, setId] = useState('');
    const [pw, setPW] = useState('');
    const [check_pw, setCheck_PW] = useState('');
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [sms1, setSMS1] = useState('');
    const [sms2, setSMS2] = useState('');
    const [sms3, setSMS3] = useState('');
    const [email, setEmail] = useState('');
    const [idError, setIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [checkPasswordError, setCheckPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();
    
    const Cancel = () => {
        navigate("/")
    }

    const validateId = (value) => {
        const idRegex = /^[a-z0-9]{4,16}$/; // 아이디 조건
        if (!value.trim()) {
            setIdError("");
        } else if (!idRegex.test(value)) {
            setIdError("아이디는 영문소문자와 숫자로 이루어진 4~16자를 입력해주세요.");
        } else {
            setIdError("");
        }
    };
    
    const validatePassword = (value) => {
        const passwordRegex =
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // 비밀번호 조건
        if (!value.trim()) {
            setIdError("");
        } else if (!passwordRegex.test(value)) {
            setPasswordError(
            "조건에 맞는 비밀번호를 입력해주세요."
        );
        } else {
            setPasswordError("");
        }
    };
    
    const validateCheckPassword = (value) => {
        if (value !== pw) {
            setCheckPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        } else {
            setCheckPasswordError("");
        }
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 형식
        if (!value.trim()) {
            setIdError("");
        } else if (!emailRegex.test(value)) {
            setEmailError("유효한 이메일 주소를 입력해주세요.");
        } else {
            setEmailError("");
        }
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
        validateId(e.target.value);
    };

    const handlePWChange = (e) => {
        setPW(e.target.value);
        validatePassword(e.target.value);
    };

    const handleCheck_PWChange = (e) => {
        setCheck_PW(e.target.value);
        validateCheckPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddress1Change = (e) => {
        setAddress1(e.target.value);
    };

    const handleAddress2Change = (e) => {
        setAddress2(e.target.value);
    };

    const handleAddress3Change = (e) => {
        setAddress3(e.target.value);
    };

    const handleSMS1Change = (e) => {
        setSMS1(e.target.value);
    };

    const handleSMS2Change = (e) => {
        setSMS2(e.target.value);
    };

    const handleSMS3Change = (e) => {
        setSMS3(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleSignUp = () => {
        // 아이디 조건 검사 (4~16자, 영문소문자/숫자 조합)
        const idRegex = /^[a-z0-9]{4,16}$/; // 영문소문자/숫자, 4~16자
        if (!id.trim()) {
            alert("아이디를 입력해주세요.");
            return;
            }
        if (!idRegex.test(id)) {
            alert("아이디는 영문소문자와 숫자로 이루어진 4~16자를 입력해주세요.");
            return;
        }
        
        // 비밀번호 조건 검사 (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8~16자)
        const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        if (!pw.trim()) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
        if (!pwRegex.test(pw)) {
            alert("비밀번호는 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 8~16자를 입력해주세요.");
            return;
        }
        
        // 비밀번호 확인 검사
        if (!check_pw.trim()) {
            alert("비밀번호 확인을 입력해주세요.");
            return;
        }
        if (pw !== check_pw) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        
        // 이름 조건 검사
        if (!name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }
        
        // 주소 조건 검사
        if (!address1.trim() || !address2.trim()) {
            alert("주소를 입력해주세요.");
            return;
        }
        
        // 이메일 조건 검사
        if (!email.trim()) {
            alert("이메일을 입력해주세요.");
            return;
        }
        
        // 모든 조건을 통과한 경우
        alert("회원가입이 완료되었습니다!");
        navigate("/");
    };

    return (
        <div className={styles["back-img"]}>
            <Header />
            <main>
            <div className={styles.main_div}>
                    <div className={styles.join}>
                        <p>회원 가입</p>
                    </div>
                    <div className={styles.main_info}>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>아이디</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="text" 
                                    maxLength="16"
                                    id="id" 
                                    value={id} 
                                    onChange={handleIdChange} 
                                    />
                                <p>(영문소문자/숫자, 4~16자)</p> 
                                {idError && <p className={styles.error}>{idError}</p>}   
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>비밀번호</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="password" 
                                    maxLength="16"
                                    id="pw" 
                                    value={pw} 
                                    onChange={handlePWChange} 
                                    />
                                <p>(영문소문자/숫자/특수문자 중 3가지 이상 조합,8~16자)</p> 
                                {passwordError && <p className={styles.error}>{passwordError}</p>}   
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>비밀번호 확인</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="password" 
                                    maxLength="16"
                                    id="check_pw" 
                                    value={check_pw} 
                                    onChange={handleCheck_PWChange} 
                                    />
                                    {checkPasswordError && <p className={styles.error}>{checkPasswordError}</p>}  
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>이름</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="text" 
                                    id="name" 
                                    value={name} 
                                    onChange={handleNameChange} 
                                    />    
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>주소</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info2}>
                                <div className={styles.input_info2_div}>
                                    <div className={styles.address_search}>
                                        <input 
                                            type="text" 
                                            id="address1" 
                                            value={address1} 
                                            onChange={handleAddress1Change} 
                                            placeholder="우편번호" 
                                            />  
                                        <button>주소검색</button>
                                    </div>
                                    <input 
                                        type="text" 
                                        id="address2" 
                                        value={address2} 
                                        onChange={handleAddress2Change} 
                                        placeholder="기본주소" 
                                        />
                                    <input 
                                        type="text" 
                                        id="address3" 
                                        value={address3} 
                                        onChange={handleAddress3Change} 
                                        placeholder="나머지 주소(선택 입력 가능)" 
                                        /> 
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>휴대전화</p>
                            </div>
                            <div className={styles.input_info3}>
                                <input 
                                    type="text" 
                                    maxLength="3"
                                    id="sms1" 
                                    value={sms1} 
                                    onChange={handleSMS1Change} 
                                    />
                                <p>-</p>  
                                <input 
                                    type="text" 
                                    maxLength="4"
                                    id="sms2" 
                                    value={sms2} 
                                    onChange={handleSMS2Change} 
                                    />
                                <p>-</p>
                                <input 
                                    type="text" 
                                    maxLength="4"
                                    id="sms3" 
                                    value={sms3} 
                                    onChange={handleSMS3Change} 
                                    /> 
                            </div>
                        </div>
                        <div className={styles.info4}>
                            <div className={styles.id}>
                                <p>이메일</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                    />
                                    {emailError && <p className={styles.error}>{emailError}</p>}   
                            </div>
                        </div>
                    </div>
                    <div className={styles.button_div}>
                        <div className={styles.buttons}>
                            <button onClick={handleSignUp}>회원가입</button>
                            <button onClick={Cancel}>취소</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}; 

export default Join;