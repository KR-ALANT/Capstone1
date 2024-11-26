import { faClipboard, faAddressCard, faHeart} from '@fortawesome/free-regular-svg-icons'
import { faClipboardCheck, faTicketSimple, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from'./MyPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';


const MyPage = () => {
  const navigate = useNavigate();

  const MyPoint = () => {
    navigate("/Point")
  }

  const MyCoupon = () => {
    navigate("/Coupon")
  }

  const MyRating = () =>{
    navigate("/Rating")
  }

  const MyOrder = () =>{
    navigate("/Order")
  }

  const MyProfile = () => {
    navigate("/Profile")
  }
  const MyWishlist = () => {
    navigate("/Wishlist")
  }

  const MyBoard = () => {
    navigate("/Board")
  }

  return (
    /*사이트 전체*/
    <div>
      <Header />
      <main>
        {/*My Page 및 그 아래의 내용 전체*/}
        <div>
          {/*My Page*/}
          <div className = {styles.mp}>
            <p>My Page</p>
          </div>
          {/*가용적립금, 사용적립금, 쿠폰, 총적립금, 총주문*/}
          <div className = {styles["accumulated-money"]}>
            {/*가용적립금, 사용적립금, 쿠폰*/}
            <div classNmae={styles["acc-money"]}>
              {/*가용적립금*/}
              {/*사용적립금*/}
              <div className={styles["reserve-use"]}>
                <p> 사용적립금 </p>
                <p> 원 </p>
              </div>
              {/*쿠폰*/}
              <div className={styles.coupon}>
                <p> 쿠폰 </p>
                {/*쿠폰 버튼*/}
                <button className={styles["coupon-button"]}>
                  <FontAwesomeIcon icon={faTicketSimple} style={{width: "20px", height: "20px", color: "black", marginRight: "120px"}} onClick={MyCoupon}/>
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
                  <FontAwesomeIcon icon={faSackDollar} style={{width: "20px", height: "20px", color: "black"}}  onClick={MyPoint}/>
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
          {/*나의 주문 처리 현황, 입금전, 배송준비중, 배송중, 배송완료, 등급확인*/}
          <div className={styles["order-processing-status"]}>
            {/*나의 주문 처리 현황, 최근 3개월 기준*/}
            <div className={styles["total-myorder"]}>
              {/*나의 주문 처리 현황*/}
                <p className={styles.myorder}>나의 주문 처리 현황</p>
                <pre className={styles.recently}> (최근 </pre>
                {/*3개월*/}
                <p className={styles.thrmonth}> 3개월 </p>
                <pre className={styles.recently}> 기준)</pre>
            </div>
            {/*입금전, 배송준비중, 배송중, 배송완료, 등급확인*/}
            <div className={styles["total-delivery"]}>
              {/*입금전 및 개수*/}
              <div className={styles["before-delivery"]}>
                {/*입금전*/}
                <p className={styles["before-delivery-korean"]}>입금전</p>
                {/*입금전 개수*/}
                <p className={styles["before-delivery-number"]}> 0 </p>
              </div>
              {/*배송준비중 및 개수*/}
              <div className={styles["prepare-delivery"]}>
                {/*배송준비중*/}
                <p className={styles["prepare-delivery-korean"]}>배송준비중</p>
                {/*배송준비중 개수*/}
                <p className={styles["prepare-delivery-number"]}> 0 </p>
              </div>
              {/*배송중 및 개수*/}
              <div className={styles["in-delivery"]}>
                {/*배송중*/}
                <p className={styles["in-delivery-korean"]}>배송중</p>
                {/*배송중 개수*/}
                <p className={styles["in-delivery-number"]}> 0 </p>
              </div>
              {/*배송완료 및 개수*/}
              <div className={styles["complete-delivery"]}>
                {/*배송완료*/}
                <p className={styles["complete-delivery-korean"]}>배송완료</p>
                {/*배송완료 개수*/}
                <p className={styles["complete-delivery-number"]}> 0 </p>
              </div>
              {/*등급확인*/}
              <button className={styles["check-rating"]} onClick={MyRating}>등급 확인</button>
            </div>
          </div>
          {/*Order, Profile, Wishlist, Board*/}
          <div className={styles["every-page"]}>
            {/*order 전체*/}
            <button className={styles.order} onClick={MyOrder}>
              {/*Order 아이콘*/}
              <FontAwesomeIcon icon={faClipboard} style={{width: "35px", height: "35px"}}/>
              {/*Order*/}
              <p className={styles["order-title"]}>Order</p>
              {/*Order 설명*/}
              <p className={styles["order-explanation"]}>고객님께서 주문하신 상품의 주문내역을<br></br> 확인하실 수 있습니다.</p>
            </button>
            {/*Profile 전체*/}
            <button className={styles.profile} onClick={MyProfile}>
              {/*Profile 아이콘*/}
              <FontAwesomeIcon icon={faAddressCard} style={{width: "35px", height: "35px"}} />
              {/*Profile*/}
              <p className={styles["profile-title"]}>Profile</p>
              {/*Profile 살먕*/}
              <p className={styles["profile-explanation"]}>회원이신 고객님의<br></br> 개인정보를 관리하는 공간입니다.</p>
            </button>
            {/*Wishlist 전체*/}
            <button className={styles.wishlist} onClick={MyWishlist}> 
              {/*Wishlist 아이콘*/}
              <FontAwesomeIcon icon={faHeart} style={{width: "35px", height: "35px"}} />
              {/*Wishlist*/}
              <p className={styles["wishlist-title"]}>Wishlist</p>
              {/*Wishlist 설명*/}
              <p className={styles["wishlist-explanation"]}>관심상품으로 등록하신 상품의 목록을<br></br> 보여드립니다.</p>
            </button>
            {/*Board 전체*/}
            <button className={styles.board} onClick={MyBoard}>
              {/*Board 아이콘*/}
              <FontAwesomeIcon icon={faClipboardCheck} style={{width: "35px", height: "35px"}} />
              {/*Board*/}
              <p className={styles["board-title"]}>Board</p>
              {/*Board 설명*/}
              <p className={styles["board-explanation"]}>고객님께서 작성하신 게시물을 관리하는<br></br> 공간입니다.</p>
            </button>
          </div>
        </div>
        </main>
        <Footer />
    </div>
  );
};

export default MyPage;
