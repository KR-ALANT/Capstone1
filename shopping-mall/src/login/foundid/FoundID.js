import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./FoundID.module.css';
import Header from '../../header/Header.js'

const FoundID = () => {
    return(
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div>
                    <div className={styles.id}>
                        <p className={styles.eng_notice}>ID has been successfully sent.</p>
                        <p className={styles.kor_notice}>아이디가 전송되었습니다.</p>
                    </div>
                    <div className={styles.buttons}>
                    <a href="/ForgotPW"><button>forgot PW</button></a>
                    <a href="/"><button>HOME</button></a>
                    <a href="/Login"><button>LOGIN</button></a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FoundID;