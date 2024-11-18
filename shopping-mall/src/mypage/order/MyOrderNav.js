import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React, useState } from 'react';
import styles from './MyOrderNav.module.css'
import { Dropdown } from './Dropdwon';
import CustomCalendar from './Calendar';
import moment from "moment";


const smapleData = {data : ["전체 주문처리상태", "입금전", "배송준비중", "배송중", "배송완료", "취소", "교환", "반품"]}

const MyOrderNav = ({ tab }) =>{
  const [value, onChange] = useState(new Date());
  const [nowDate, setNowDate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  if (tab===0){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops"]}>
              {/*전체 주문처리 상태*/}
              <div className={styles.drop}>
                <Dropdown props={smapleData} />
              </div>
              <div className={styles.cal}>
                <CustomCalendar onChange={handleDateChange} value={value}></CustomCalendar>
              </div>
            </div>
          </div>
          <div className={styles["order-guide"]}>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>취소/교환/반품 신청은 배송완료일 기준 3일까지 가능합니다.</p>
            </div>
          </div>
        </div>
        <div className={styles["order-product-information"]}>
          {/*주문 상픔 정보*/}
          <div className={styles["product-information"]}>
            <p>주문 상품 정보</p>
          </div>
          <div>
            {/*주문일자 등등*/}
            <div className={styles["order-product"]}>
              <div className={styles["order-date"]}>
                <p>주문일자</p>
                <p>[주문번호]</p>
              </div>
              <div className={styles["order-image"]}>
                <p>이미지</p>
              </div>
              <div className={styles["pro-information"]}>
                <p>상품정보</p>
              </div>
              <div className={styles.quantity}>
                <p>수량</p>
              </div>
              <div className={styles["product-purchase"]}>
                <p>상품구매금액</p>
              </div>
              <div className={styles["order-processing"]}>
                <p>주문처리상태</p>
              </div>
              <div className={styles.cancellation}>
                <p>취소/교환/반품</p>
              </div>
            </div>
            {/*주문 내역 없습니다.*/}
            <div className={styles["no-order"]}>
              <p>주문 내역이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(tab===1){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops1"]}>
              {/*전체 주문처리 상태*/}
              <div className={styles.cal}>
                <CustomCalendar onChange={handleDateChange} value={value}></CustomCalendar>
              </div>
            </div>
          </div>
          <div className={styles["order-guide"]}>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>기본적으로 최근 3개월간의 자료가 조회되며, 기간 검색시 주문처리완료 후 36개월 이내의 주문내역을 조회하실 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>완료 후 36개월 이상 경과한 주문은 [과거주문내역]에서 확인할 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.</p>
            </div>
          </div>
        </div>
        <div className={styles["order-product-information"]}>
          {/*주문 상픔 정보*/}
          <div className={styles["product-information"]}>
            <p>취소/교환/반품</p>
          </div>
          <div>
            {/*주문일자 등등*/}
            <div className={styles["order-product"]}>
              <div className={styles["order-date"]}>
                <p>주문일자</p>
                <p>[주문번호]</p>
              </div>
              <div className={styles["order-image"]}>
                <p>이미지</p>
              </div>
              <div className={styles["pro-information"]}>
                <p>상품정보</p>
              </div>
              <div className={styles.quantity}>
                <p>수량</p>
              </div>
              <div className={styles["product-purchase"]}>
                <p>상품구매금액</p>
              </div>
              <div className={styles["order-processing"]}>
                <p>주문처리상태</p>
              </div>
              <div className={styles.cancellation}>
                <p>취소/교환/반품</p>
              </div>
            </div>
            {/*주문 내역 없습니다.*/}
            <div className={styles["no-order"]}>
              <p>주문 내역이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(tab===2){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops1"]}>
              {/*전체 주문처리 상태*/}
              <div className={styles.cal}>
                <CustomCalendar onChange={handleDateChange} value={value}></CustomCalendar>
              </div>
            </div>
          </div>
          <div className={styles["order-guide"]}>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>주문처리완료 후 36개월 이내의 최근 주문건은 주문내역조회 탭에서 확인할 수 있습니다.</p>
            </div>
            <div className={styles["guide-content"]}>
              <FontAwesomeIcon icon={faCircle} className={styles.number}/>
              <p>상품구매금액은 주문 당시의 판매가와 옵션추가금액의 합(부가세 포함)에 수량이 반영된 값입니다.</p>
            </div>
          </div>
        </div>
        <div className={styles["order-product-information"]}>
          {/*주문 상픔 정보*/}
          <div className={styles["product-information"]}>
            <p>구매 내역</p>
          </div>
          <div>
            {/*주문일자 등등*/}
            <div className={styles["order-product"]}>
              <div className={styles["order-date"]}>
                <p>주문일자</p>
                <p>[주문번호]</p>
              </div>
              <div className={styles["order-image"]}>
                <p>이미지</p>
              </div>
              <div className={styles["pro-information"]}>
                <p>상품정보</p>
              </div>
              <div className={styles.quantity}>
                <p>수량</p>
              </div>
              <div className={styles["product-purchase"]}>
                <p>상품구매금액</p>
              </div>
              <div className={styles["order-processing"]}>
                <p>주문처리상태</p>
              </div>
              <div className={styles.cancellation}>
                <p>취소/교환/반품</p>
              </div>
            </div>
            {/*주문 내역 없습니다.*/}
            <div className={styles["no-order"]}>
              <p>주문 내역이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyOrderNav;