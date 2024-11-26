import React, { useState } from 'react';
import styles from './Board.module.css';
import Header from '../../header/Header';

const Board = () => {
    const [activeTab, setActiveTab] = useState("review");

    const reviews = [
        { id: 1, product: "상품 A", title: "A 상품의 리뷰입니다", date: "2024-11-01" },
        { id: 2, product: "상품 B", title: "B 상품의 리뷰입니다", date: "2024-11-02" },
    ];

    const qna = [
        { id: 1, product: "상품 C", title: "이 제품 방수가 되나요?", type: "상품문의", date: "2024-11-03" },
        { id: 2, product: "상품 D", title: "배송이 어떻게 되나요?", type: "배송문의", date: "2024-11-04" },
    ];

    return (
        <div className={styles["back-img"]}>
            <Header />
            <main className={styles.mainContent}>
                <h1 className={styles.title}>BOARD</h1>

        
                {/* 테이블 표시 */}
                <div className={styles.contentContainer}>
                        {/* 탭 버튼 */}
                        <div className={styles.tabContainer}>
                            <button
                                className={`${styles.tabButton} ${activeTab === "review" ? styles.active : ""}`}
                                onClick={() => setActiveTab("review")}
                            >
                                리뷰
                            </button>
                            <button
                                className={`${styles.tabButton} ${activeTab === "qa" ? styles.active : ""}`}
                                onClick={() => setActiveTab("qa")}
                            >
                                Q&A
                            </button>
                        </div>
                    <div className={styles.tableWrapper}>
                        {activeTab === "review" && (
                            <div className={styles.reviewTable}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>번호</th> {/* 번호 컬럼 추가 */}
                                            <th className={styles.product}>상품 정보</th>
                                            <th className={styles.title}>제목</th>
                                            <th> </th>
                                            <th className={styles.date}>작성일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviews.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className={styles.emptyMessage}>리뷰가 없습니다.</td>
                                            </tr>
                                        ) : (
                                            reviews.map((review, index) => (
                                                <tr key={review.id}>
                                                    <td>{index + 1}</td> {/* 번호 표시 */}
                                                    <td className={styles.product}>{review.product}</td>
                                                    <td className={styles.title}>{review.title}</td>
                                                    <td>
                                                        <button className={styles.editButton}>수정하기</button>
                                                    </td>
                                                    <td className={styles.date}>{review.date}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {activeTab === "qa" && (
                            <div className={styles.qnaTable}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>번호</th> {/* 번호 컬럼 추가 */}
                                            <th className={styles.product}>상품 정보</th>
                                            <th className={styles.title}>제목</th>
                                            <th>유형</th>
                                            <th className={styles.date}>작성일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {qna.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className={styles.emptyMessage}>Q&A가 없습니다.</td>
                                            </tr>
                                        ) : (
                                            qna.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td> {/* 번호 표시 */}
                                                    <td className={styles.product}>{item.product}</td>
                                                    <td className={styles.title}>{item.title}</td>
                                                    <td>{item.type}</td>
                                                    <td className={styles.date}>{item.date}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Board;
