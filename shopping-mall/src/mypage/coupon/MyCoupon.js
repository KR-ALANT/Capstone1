import React from 'react';
import styles from './MyCoupon.module.css';
import Header from '../../header/Header.js'

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
          <div className={styles["mycoupon-number"]}>
            <p className={styles["mycoupon-number-title"]}>쿠폰인증번호 등록하기</p>
            <div className={styles["mycoupon-number-register"]}>
              <div>
                <input className={styles["mycoupon-number-register-i"]}></input>
                <button className={styles["mycoupon-number-register-b"]}>쿠폰번호인증</button>
              </div>
              <p className={styles["mycoupon-number-register-t"]}>반드시 쇼핑몰에서 발행한 쿠폰번호만 입력해주세요.</p>
            </div>
            <div className={styles["guide-mycoupon"]}>
              <p className={styles["guide-usage-mycoupon"]}>쿠폰 이용 안내</p>
              <div className={styles["guide-mycoupon-content"]}>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>1</p>
                  <p>쿠폰인증번호 등록하기에서 쇼핑몰에서 발행한 종이쿠폰/시리얼쿠폰/모바일쿠폰 등의 인증번호를 등록하시려면 온라인쿠폰으로 발급되어 사용이 가능합니다.</p>
                </div>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>2</p>
                  <p>쿠폰은 주문 시 1회에 한해 적용되며, 1회 사용 시 재 사용이 불가능합니다.</p>
                </div>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>3</p>
                  <p>쿠폰은 적용 가능한 상품이 따로 적용되어 있는 경우 해당 상품 구매 시에만 사용이 가능합니다.</p>
                </div>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>4</p>
                  <p>특정한 종이쿠폰/시리얼쿠폰/모바일쿠폰의 경우 단 1회만 사용이 가능할 수 있습니다.</p>
                </div>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>5</p>
                  <p>기본 배송비 할인쿠폰은 배송구분이 '기본배송'인 상품에 부과된 배송비만 할인이 적용됩니다.</p>
                </div>
                <div className={styles["guide-content"]}>
                  <p className={styles.number}>6</p>
                  <p>전체 배송비 할인쿠폰은 배송구분이 '기본배송', '개별배송', '공급사배송'인 상품에 부과된 배송비 할인이 적용됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyCoupon;