import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./ForgotPW.module.css';
import Header from '../../header/Header.js'

const ForgotPW = () => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div>
                    <div className={styles.pw}>
                        <p>PW</p>
                    </div>
                    <div className={styles.radio_div}>
                        <div className={styles.radioB}>
                            <label>
                                <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                                />
                                Verification
                            </label>
                            <label>
                                <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                                />
                                E-Mail
                            </label>
                        </div>

                        <div className={styles.radio_tap}>
                            {selectedOption === 'option1' && (
                            <div className={styles.passB}>    
                                <button>Verification</button>
                            </div>
                            )}
                            {selectedOption === 'option2' && (
                            <div>
                                <div className={styles.name}>
                                    <p>NAME</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.mail}>
                                    <p>E-Mail</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.sendB}>
                                    <button>SEND</button>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ForgotPW;