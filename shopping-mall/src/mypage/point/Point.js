import { faTicketSimple, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Point.module.css';
import Header from '../../header/Header.js'

const Point = () => {
  const navigate = useNavigate();

  const PointP = () => {
    navigate("/Point")
  };

  const MyCoupon = () => {
    navigate("/Coupon")
  }

  return (
    <div className={styles["back-img"]}>
      <Header />
      <main>
      {/*적립금 및 그 아래의 내용 전체*/}
        <div>
          {/*적립금*/}
          <div className={styles.accm}>
            <p>Point</p>
          </div>
          {/*가용적립금, 사용적립금, 쿠폰, 총적립금, 총주문*/}
          <div className = {styles["accumulated-money"]}>
            {/*가용적립금, 사용적립금, 쿠폰*/}
            <div classNmae={styles["acc-money"]}>
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
                  <FontAwesomeIcon icon={faTicketSimple} style={{width: "20px", height: "20px", color: "#000000", marginRight: "120px"}} onClick={MyCoupon} />
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
                  <FontAwesomeIcon icon={faSackDollar} style={{width: "20px", color: "#000000", height: "20px"}} onClick={PointP} />
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
          {/*적립내역보기 전체*/}
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
          {/* 적립금 안내 전체 */}
          <div className={styles["guide-acc-money"]}>
            <p className={styles["guide-money"]}>적립금 안내</p>
            {/* 적립금 문구 전체 */}
            <div className={styles["guide-content"]}>
              <br></br>
              {/* 첫 번째 적립금 문구 */}
              <div className={styles["first-guide-content"]}>
                <p className={styles.number}>1.</p>
                <p>주문으로 발생한 적립금은 배송완료 후 20일 부터 실제 사용 가능한 적립금으로 전환됩니다. 배송완료 시점으로부터 20일 동안은 미가용 적립금으로 분류됩니다.</p>
              </div>
              <br></br>
              {/* 두 번째 적립금 문구 */}
              <div className={styles["first-guide-content"]}>
                <p className={styles.number}>2.</p>
                <p>미가용 적립금은 반품, 구매취소 등을 대비한 임시 적립금으로 사용가능 적립금으로 전환되기까지 상품구매에 사용하실 수 없습니다.</p>
              </div>
              <br></br>
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