import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from'./Profile.module.css';
import Header from '../../header/Header.js'

const Profile = () => {
    const [id, setId] = useState('');
    const [now_pw, setNow_PW] = useState('');
    const [new_pw, setNew_PW] = useState('');
    const [check_new_pw, setCheck_New_PW] = useState('');
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [sms1, setSMS1] = useState('');
    const [sms2, setSMS2] = useState('');
    const [sms3, setSMS3] = useState('');
    const [sms_radio, setSMS_Radio] = useState('');
    const [email, setEmail] = useState('');
    const [email_radio, setEmail_Radio] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNow_PWChange = (e) => {
        setNow_PW(e.target.value);
    };

    const handleNew_PWChange = (e) => {
        setNew_PW(e.target.value);
    };

    const handleCheck_New_PWChange = (e) => {
        setCheck_New_PW(e.target.value);
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

    const handleSMS_RadioChange = (e) => {
        setSMS_Radio(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmail_RadioChange = (e) => {
        setEmail_Radio(e.target.value);
    };

    return (
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div className={styles.main_div}>
                    <div className={styles.profile}>
                        <p>회원 정보 수정</p>
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
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>현재 비밀번호</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="password" 
                                    maxLength="16"
                                    id="now_pw" 
                                    value={now_pw} 
                                    onChange={handleNow_PWChange} 
                                    />
                                <p>(영문소문자/숫자/특수문자 중 3가지 이상 조합,8~16자)</p>    
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>새 비밀번호</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="password" 
                                    maxLength="16"
                                    id="new_pw" 
                                    value={new_pw} 
                                    onChange={handleNew_PWChange} 
                                    />
                                <p>(영문소문자/숫자/특수문자 중 3가지 이상 조합,8~16자)</p>    
                            </div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.id}>
                                <p>새 비밀번호 확인</p>
                            </div>
                            <div className={styles.input_info}>
                                <input 
                                    type="password" 
                                    maxLength="16"
                                    id="check_new_pw" 
                                    value={check_new_pw} 
                                    onChange={handleCheck_New_PWChange} 
                                    />  
                            </div>
                        </div>
                        <div className={styles.info2}>
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
                        <div className={styles.info3}>
                            <div className={styles.id}>
                                <p>주소</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info3}>
                                <div className={styles.input_info3_div}>
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
                        <div className={styles.info4}>
                            <div className={styles.id}>
                                <p>휴대전화</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info4}>
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
                        <div className={styles.info5}>
                            <div className={styles.id}>
                                <p>SMS 수신여부</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info5}>
                                <div>
                                    <div className={styles.radio_div}>
                                        <input 
                                            type="radio" 
                                            id="sms_radio1" 
                                            name="sms_send"
                                            value={sms_radio} 
                                            onChange={handleSMS_RadioChange} 
                                            />
                                            <p>수신함</p>
                                        <input 
                                            type="radio" 
                                            id="sms_radio2" 
                                            name="sms_send"
                                            value={sms_radio} 
                                            onChange={handleSMS_RadioChange} 
                                            />
                                            <p>수신안함</p>
                                    </div>
                                    <p className={styles.notice}>쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다.</p>  
                                </div>  
                            </div>
                        </div>
                        <div className={styles.info}>
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
                            </div>
                        </div>
                        <div className={styles.info6}>
                            <div className={styles.id}>
                                <p>이메일 수신여부</p>
                                <p className={styles.star}>*</p>
                            </div>
                            <div className={styles.input_info6}>
                                <div>
                                    <div className={styles.radio_div}>
                                        <input 
                                            type="radio" 
                                            id="email_radio1"
                                            name="email_send" 
                                            value={email_radio} 
                                            onChange={handleEmail_RadioChange} 
                                            />
                                            <p>수신함</p>
                                        <input 
                                            type="radio" 
                                            id="email_radio2" 
                                            name="email_send"
                                            value={email_radio} 
                                            onChange={handleEmail_RadioChange} 
                                            />
                                            <p>수신안함</p>
                                    </div>
                                    <p className={styles.notice}>쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수 있습니다.</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button_div}>
                        <div className={styles.buttons}>
                            <button>회원정보수정</button>
                            <button>취소</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile;