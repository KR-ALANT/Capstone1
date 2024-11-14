import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./FoundPW.module.css';
import Header from '../../header/Header.js'

const FoundPW = () => {
    return(
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div>
                    <div className={styles.pw}>
                        <p className={styles.eng_notice}>Your passward was changed successfully.</p>
                        <p className={styles.kor_notice}>비밀번호 변경이 완료되었습니다.</p>
                    </div>
                    <div className={styles.buttons}>
                    <a href="/"><button>HOME</button></a>
                    <a href="/Login"><button>LOGIN</button></a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FoundPW;