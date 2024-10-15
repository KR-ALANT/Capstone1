import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from'./MyPage.module.css';

const MyPage = () => {
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    return (
        <div className={styles["back-img"]}>
            <header>
                <div className={styles["menu-bar"]}>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className={styles["menu-icon"]}>&#9776;</label>
                    <nav className="menu">
                        <label htmlFor="menu-toggle" className={styles["close-icon"]}>X</label>
                        <div className={styles["menu-bottom"]}>
                            <div className={styles["shop"]}>
                                <span className={styles["main-category"]}>SHOP</span>
                                <a href="#" className={styles["sub-category"]}>All</a>
                                <a href="#" className={styles["sub-category"]}>Best</a>
                                <a href="#" className={styles["sub-category"]}>New</a>
                                <a href="#" className={styles["sub-category"]}>Outer</a>
                                <a href="#" className={styles["sub-category"]}>Top</a>
                                <a href="#" className={styles["sub-category"]}>Bottom</a>
                                <a href="#" className={styles["sub-category"]}>Etc</a>
                            </div>
                            <div className={styles.company}>
                                <span className={styles["main-category"]}>Q&A</span>
                                <Link to="/ask" className={styles["sub-category"]}>Ask</Link>
                                <a href="#" className={styles["sub-category"]}>FAQ</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className={styles.logo} />
                <div className={styles["header-icons"]}>
                    <a href="#" className={styles.icon}>join</a>
                    <a href="#" className={styles.icon}>login</a>
                    <a href="#" className={styles.icon}>mypage</a>
                    <a href="#" className={styles.icon} onClick={toggleSearch}>search</a>
                    <a href="#" className={styles.icon}>cart</a>
                </div>
            </header>
            <div className={`search-bar ${searchActive ? 'active' : ''}`}>
                <input type="text" placeholder="Search..." className={styles["search-input"]} />
                <button className={styles["search-btn"]}>Search</button>
                <button className={styles["back-btn"]} onClick={toggleSearch}>Back</button>
            </div>
            <main>
                <div className = {styles.mp}>
                    <p>mypage</p>
                </div>
                <div className = {styles["accumulated-money"]}>
                    <div classNmae={styles["acc-money"]}>
                        <div className={styles["available-reserve"]}>
                            <p> 가용적립금 </p>
                            <p> 원 </p>
                        </div>
                        <div className={styles["reserve-use"]}>
                            <p> 사용적립금 </p>
                            <p> 원 </p>
                        </div>
                        <div className={styles.coupon}>
                            <p> 쿠폰 </p>
                            <p> 개 </p>
                        </div>
                    </div>
                    <div className={styles.inquiry}>
                        <button  className={styles.pointin}> 조회 </button>
                        <button className={styles.couponin}> 조회 </button>
                    </div>
                    <div className={styles.total}>
                        <div className={styles["total-acc-money"]}>
                            <p> 총적립금 </p>
                            <p> 원 </p>
                        </div>
                        <div className={styles["total-order"]}>
                            <p> 총주문 </p>
                            <p> 원 </p>
                            <p>( 회)</p>
                        </div>
                    </div>
                </div>
                <div className={styles["order-processing-status"]}>

                </div>
                <div className={styles["every-page"]}>
                    <div className={styles.order}>

                    </div>
                    <div className={styles.profile}>

                    </div>
                    <div className={styles.wishlist}>

                    </div>
                    <div className={styles.board}>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyPage;
