import { faTicketSimple, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styles from './Point.module.css';
import TabContent  from './TabContent.js';

const Point = () => {
    const [searchActive, setSearchActive] = useState(false);
    let [tab, setTab] = useState(0);  // 탭 상태값 0, 1, 2를 사용

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const navigate = useNavigate();

    const PointP = () => {
        navigate("/Point")
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
                    <a href="/MyPage" className={styles.icon}>mypage</a>
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
                {/*적립금 및 그 아래의 내용 전체*/}
                <div className={styles.main2}>
                    {/*적립금*/}
                    <div className={styles.accm}>
                        <p>적립금</p>
                    </div>
                    {/*가용적립금, 사용적립금, 쿠폰, 총적립금, 총주문*/}
                    <div className = {styles["accumulated-money"]}>
                        {/*가용적립금, 사용적립금, 쿠폰*/}
                        <div classNmae={styles["acc-money"]}>
                            {/*가용적립금*/}
                            <div className={styles["available-reserve"]}>
                                <p> 가용적립금 </p>
                                <p> 원 </p>
                            </div>
                            {/*사용적립금*/}
                            <div className={styles["reserve-use"]}>
                                <p> 사용적립금 </p>
                                <p> 원 </p>
                            </div>
                            {/*쿠폰*/}
                            <div className={styles.coupon}>
                                <p> 쿠폰 </p>
                                {/*쿠폰 버튼*/}
                                <button className={styles["coupon-button"]} onClick={PointP}>
                                    <FontAwesomeIcon icon={faTicketSimple} style={{width: "20px", height: "20px", marginRight: "120px"}}/>
                                </button>
                                <p> 개 </p>
                            </div>
                        </div>
                        {/*총적립금, 총주문*/}
                        <div className={styles.total}>
                            {/*총적립금*/}
                            <div className={styles["total-acc-money"]}>
                                <p> 총적립금 </p>
                                {/*총적립금 버튼*/}
                                <button className={styles["total-acc-money-button"]}>
                                    <FontAwesomeIcon icon={faSackDollar} style={{width: "20px", height: "20px"}} />
                                </button>
                                <p> 원 </p>
                            </div>
                            {/*총주문*/}
                            <div className={styles["total-order"]}>
                                <p> 총주문 </p>
                                {/*원(회)*/}
                                <div className={styles["total-order-won"]}>
                                    <p> 원 </p>
                                    <p>( 회)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 탭 메뉴 전체 */}
                    <Nav className={styles["accrual-history"]} variant="tabs" defaultActiveKey="link0">
                        {/* 적립내역보기, 미가용적립내역보기, 미가용쿠폰/회원등급적립내역 전체 */}
                        <Nav.Item className={styles["accrual-history-button"]}>
                            <Nav.Link className={styles.acchb} onClick={() => { setTab(0) }} eventKey="link0">적립내역보기</Nav.Link>
                            <Nav.Link className={styles.acchb} onClick={() => { setTab(1) }} eventKey="link1">미가용적립내역보기</Nav.Link>
                            <Nav.Link className={styles.acchb} onClick={() => { setTab(2) }} eventKey="link2">미가용쿠폰/회원등급적립내역</Nav.Link>
                        </Nav.Item>
                        {/* 선택된 탭 내용 */}
                        <TabContent tab={tab} />
                    </Nav>
                    {/* 적립금 안내 전체 */}
                    <div className={styles["guide-acc-money"]}>
                        <p className={styles["guide-money"]}>적립금 안내</p>
                        {/* 적립금 문구 전체 */}
                        <div className={styles["guide-content"]}>
                            {/* 첫 번째 적립금 문구 */}
                            <div className={styles["first-guide-content"]}>
                                <p className={styles.number}>1.</p>
                                <p>주문으로 발생한 적립금은 배송와뇰 후 20일 부터 실제 사용 가능한 적립금으로 전환됩니다. 배송완료 시점으로부터 20일 동안은 미가용 적립금으로 분류됩니다.</p>
                            </div>
                            {/* 두 번째 적립금 문구 */}
                            <div className={styles["first-guide-content"]}>
                                <p className={styles.number}>2.</p>
                                <p>미가용 적립금은 반품, 구매취소 등을 대비한 임시 적립금으로 사용가능 적립금으로 전환되기까지 상품구매에 사용하실 수 없습니다.</p>
                            </div>
                            {/* 세 번째 적립금 문구 */}
                            <div className={styles["first-guide-content"]}>
                                <p className={styles.number}>3.</p>
                                <p>사용가능 적립금(총적립금-사용된적립금-미가용적립금)은 상푼구매 시 바로 사용가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Point;