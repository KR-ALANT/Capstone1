import {faClipboard, faAddressCard, faHeart} from '@fortawesome/free-regular-svg-icons'
import {faClipboardCheck, faTicketSimple, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from'./MyPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyPage = () => {
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const navigate = useNavigate();

    const MyPage = () =>{
        navigate("/MyPage")
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
                    <a href="#" className={styles.icon} onClick={MyPage}>mypage</a>
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
                <div className = {styles.main2}>
                    <div className = {styles.mp}>
                        <p>My Page</p>
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
                                <button className={styles["coupon-button"]}>
                                    <FontAwesomeIcon icon={faTicketSimple} style={{width: "20px", height: "20px", marginRight: "120px"}}/>
                                </button>
                                <p> 개 </p>
                            </div>
                        </div>
                        <div className={styles.total}>
                            <div className={styles["total-acc-money"]}>
                                <p> 총적립금 </p>
                                <button className={styles["total-acc-money-button"]}>
                                    <FontAwesomeIcon icon={faSackDollar} style={{width: "20px", height: "20px"}} />
                                </button>
                                <p> 원 </p>
                            </div>
                            <div className={styles["total-order"]}>
                                <p> 총주문 </p>
                                <div className={styles["total-order-won"]}>
                                    <p> 원 </p>
                                    <p>( 회)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["order-processing-status"]}>
                        <div className={styles["total-myorder"]}>
                            <p className={styles.myorder}>나의 주문 처리 현황</p>
                            <pre> (최근 </pre>
                            <p className={styles.thrmonth}> 3개월 </p>
                            <pre> 기준)</pre>
                        </div>
                        <div className={styles["total-delivery"]}>
                            <div className={styles["before-delivery"]}>
                                <p className={styles["before-delivery-korean"]}>입금전</p>
                                <p className={styles["before-delivery-number"]}> 0 </p>
                            </div>
                            <div className={styles["prepare-delivery"]}>
                                <p className={styles["prepare-delivery-korean"]}>배송준비중</p>
                                <p className={styles["prepare-delivery-number"]}> 0 </p>
                            </div>
                            <div className={styles["in-delivery"]}>
                                <p className={styles["in-delivery-korean"]}>배송중</p>
                                <p className={styles["in-delivery-number"]}> 0 </p>
                            </div>
                            <div className={styles["complete-delivery"]}>
                                <p className={styles["complete-delivery-korean"]}>배송완료</p>
                                <p className={styles["complete-delivery-number"]}> 0 </p>
                            </div>
                                <button className={styles["check-rating"]}>등급 확인</button>
                        </div>
                    </div>
                    <div className={styles["every-page"]}>
                        <button className={styles.order}>
                            <FontAwesomeIcon icon={faClipboard} style={{width: "35px", height: "35px"}}/>
                            <p className={styles["order-title"]}>Order</p>
                            <p className={styles["order-explanation"]}>고객님께서 주문하신 상품의 주문내역을<br></br> 확인하실 수 있습니다.</p>
                        </button>
                        <button className={styles.profile}>
                            <FontAwesomeIcon icon={faAddressCard} style={{width: "35px", height: "35px"}} />
                            <p className={styles["profile-title"]}>Profile</p>
                            <p className={styles["profile-explanation"]}>회원이신 고객님의<br></br> 개인정보를 관리하는 공간입니다.</p>
                        </button>
                        <button className={styles.wishlist}>
                        <FontAwesomeIcon icon={faHeart} style={{width: "35px", height: "35px"}} />
                            <p className={styles["wishlist-title"]}>Wishlist</p>
                            <p className={styles["wishlist-explanation"]}>관심상품으로 등록하신 상품의 목록을<br></br> 보여드립니다.</p>
                        </button>
                        <button className={styles.board}>
                        <FontAwesomeIcon icon={faClipboardCheck} style={{width: "35px", height: "35px"}} />
                            <p className={styles["board-title"]}>Board</p>
                            <p className={styles["board-explanation"]}>고객님께서 작성하신 게시물을 관리하는<br></br> 공간입니다.</p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyPage;
