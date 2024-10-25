import React from 'react';
import styles from './MyCoupon.module.css';
import Header from '../../header/Header.js'
import MyCouponPage from './MyCouponPage.js'

const MyCoupon = () => {

  return (
    <div className={styles["back-img"]}>
      <Header />
      <main>
        <div>
          <div className={styles.mc}>
            <p>My Coupon</p>
          </div>
          <div className={styles["mycoupon-list"]}>
            <div className={styles["mycoupon-list-title"]}>
              <p className={styles["mycoupon-list-title-f"]}>마이 쿠폰 목록</p>
              <p className={styles["mycoupon-list-title-s"]}>사용가능 쿠폰 0장</p>
            </div>
            <div className={styles["mycoupon-content-title"]}>
              <p className={styles["mycoupon-content-number"]}>번호</p>
              <p className={styles["mycoupon-contnet-name"]}>쿠폰명</p>
              <p className={styles["mycoupon-contnet-product"]}>쿠폰전용 상품</p>
              <p className={styles["mycoupon-contnet-price"]}>구매금액</p>
              <p className={styles["mycoupon-contnet-payment"]}>결제수단</p>
              <p className={styles["mycoupon-contnet-benefit"]}>쿠폰혜택</p>
              <p className={styles["mycoupon-contnet-period"]}>사용가능기간</p>
            </div>
            <div className={styles["mycoupon--content"]}>
              <p>보유하고 계신 쿠폰 내역이 없습니다.</p>
            </div>
            <div>
              {/*<MyCouponPage />*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCoupon;