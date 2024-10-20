import React from "react";
import styles from './TabContent.module.css';

function TabContent({ tab }) {
    if (tab === 0) {
        return (
            /*적립내역보기 전체*/
            <div className={styles["accrual-history-content"]}>
                {/*주문날짜, 적립금, 관련주문, 내용*/}
                <div className={styles["acchc"]}>
                    <p className={styles["Order-Date"]}>주문날짜</p>
                    <p className={styles.accumulaged}>적립금</p>
                    <p className={styles["related-order"]}>관련주문</p>
                    <p className={styles.content}>내용</p>
                </div>
                {/*적립금 내역*/}
                <div className={styles["no-acchc"]}>
                    <p>적립금 내역이 없습니다.</p>
                </div>
            </div>
    );
    } else if (tab === 1) {
        return(
            /*미가용적립내역보기 전체*/
            <div className={styles["accrual-history-content"]}>
                {/*주문날짜, 적립금, 관련주문, 사용가능 예정일,내용*/}
                <div className={styles["acchc"]}>
                    <p className={styles["Order-Date"]}>주문날짜</p>
                    <p className={styles.accumulaged}>적립금</p>
                    <p className={styles["related-order"]}>관련주문</p>
                    <p className={styles["expected-date"]}>사용가능 예정일</p>
                    <p className={styles.content}>내용</p>
                </div>
                {/*적립금 내역*/}
                <div className={styles["no-acchc"]}>
                    <p>적립금 내역이 없습니다.</p>
                </div>
            </div>
        );
    } else if (tab === 2) {
        return(
            /*미가용쿠폰/회원등급적립내역 전체*/
            <div className={styles["accrual-history-content"]}>
                {/*주문날짜, 미가용 적립금, 관련주문, 사용가능 예정일,내용*/}
                <div className={styles["acchc"]}>
                    <p className={styles["Order-Date"]}>주문날짜</p>
                    <p className={styles["an-unused-reserve"]}>미가용 적립금</p>
                    <p className={styles["related-order"]}>관련주문</p>
                    <p className={styles["expected-date"]}>사용가능 예정일</p>
                    <p className={styles.content}>내용</p>
                </div>
                {/*적립금 내역*/}
                <div className={styles["no-acchc"]}>
                    <p>적립금 내역이 없습니다.</p>
                </div>
            </div>
        );
    }
}

export default TabContent;