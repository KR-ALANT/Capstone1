import React, { useState } from 'react';
import Header from '../../header/Header.js';
import styles from './Rating.module.css';

const Rating1 = ({ grade }) => {
    const [selectedGrade, setSelectedGrade] = useState(null);

    const gradeDescriptions = {
        S: 'Sensual',
        T: 'Trendy',
        Y: 'Youth',
        L: 'Learn',
        E: 'Enjoy',
    };

    const gradeBenefits = {
        S: (
            <>
                <h5>해당 등급은 가장 높은 등급으로, 감각적인 패션을 소유한 사람이라는 뜻입니다.</h5><br></br>
                <p>• 3% 할인 적용</p>
                <p>• 3% 적립 적용</p>
                <p>• 10% 할인 쿠폰 1개, 15% 할인 쿠폰 1개 매월 정기적으로 지급</p>
                <p>• 전체 주문 금액 100만원 이상 사용 시 적용되는 등급</p>
            </>
        ),
        T: (
            <>
                <h5>해당 등급은 두 번째로 높은 등급으로, 유행을 잘 따라가는 사람이라는 뜻입니다.</h5><br></br>
                <p>• 2% 할인 적용</p>
                <p>• 2% 적립 적용</p>
                <p>• 5% 할인 쿠폰 1개, 10% 할인 쿠폰 1개를 매월 정기적으로 지급</p>
                <p>• 전체 주문 금액 60만원 이상 사용 시 적용되는 등급</p>
            </>
        ),
        Y: (
            <>
                <h5>해당 등급은 세 번째로 높은 등급으로, 젊게 사는 사람이라는 뜻입니다.</h5><br></br>
                <p>• 2% 할인 적용</p>
                <p>• 2% 적립 적용</p>
                <p>• 5% 할인 쿠폰 2개를 매월 정기적으로 지급</p>
                <p>• 전체 주문 금액 30만원 이상 사용 시 적용되는 등급</p>
            </>
        ),
        L: (
            <>
                <h5>해당 등급은 네 번째로 높은 등급으로, 패션을 배우고자 하는 사람이라는 뜻입니다.</h5><br></br>
                <p>• 1% 할인 적용</p>
                <p>• 1% 적립 적용</p>
                <p>• 2% 할인 쿠폰 2개를 매월 정기적으로 지급</p>
                <p>• 전체 주문 금액 10만원 이상 사용 시 적용되는 등급</p>
            </>
        ),
        E: (
            <>
                <h5>해당 등급은 다섯 번째로 높은 등급으로, 패션을 즐기는 사람이라는 뜻입니다.</h5><br></br>
                <p>• 1% 적립 적용</p>
                <p>• 첫 가입 시 5% 할인 쿠폰 제공</p>
                <p>• 첫 가입 시 적용되는 등급</p>
            </>
        ),
    };

    const handleGradeClick = (gradeLetter) => {
        setSelectedGrade(gradeLetter);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.gradeBox}>
                <span>당신의 등급은 '{gradeDescriptions[grade]}' 등급입니다.</span>
            </div>
            <div className={styles.styleText}>
                {Object.keys(gradeDescriptions).map((letter) => (
                    <span
                        key={letter}
                        className={`${styles.letter} ${selectedGrade === letter ? styles.active : ''}`}
                        onClick={() => handleGradeClick(letter)}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            {selectedGrade && (
                <div className={styles.benefitsBox}>
                    <h3>{gradeDescriptions[selectedGrade]} 등급 혜택</h3>
                    <div className={styles.benefitsContent}>{gradeBenefits[selectedGrade]}</div>
                </div>
            )}
        </div>
    );
};

export default Rating1;
