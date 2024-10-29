import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RatingNav.module.css'

const RatingNav = ({ tab }) => {
  if (tab === 0){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  } else if (tab=== 1){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first1}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  } else if (tab === 2){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second2}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  } else if(tab === 3){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third3}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  } else if(tab===4){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth4}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  } else if(tab===5){
    return(
      <div>
        {/*5th등급 숫자 및 설명 전체*/}
        <div className={styles.fifth5}>
          {/* 등급 확인 */}
          <div className={styles["fifth-check-rating"]}>
            <p className={styles["fifth-number-rating"]}> 5 </p>
            <p className={styles["fifth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["fifth-rating-Precautions"]}>
            {/* 첫 번째 5th등급 설명 */}
            <p className={styles["fifth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              첫 가입 시 5%할인 쿠폰 제공
            </p>
          </div>
        </div>
        {/*4th등급 숫자 및 설명 전체*/}
        <div className={styles.forth}>
          {/* 등급 확인 */}
          <div className={styles["forth-check-rating"]}>
            <p className={styles["forth-number-rating"]}> 4 </p>
            <p className={styles["forth-number-rating-e"]}>th</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["forth-rating-Precautions"]}>
            {/* 첫 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 4th등급 설명 */}
            <p className={styles["forth-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*3rd등급 숫자 및 설명 전체*/}
        <div className={styles.third}>
          {/* 등급 확인 */}
          <div className={styles["third-check-rating"]}>
            <p className={styles["third-number-rating"]}> 3 </p>
            <p className={styles["third-number-rating-e"]}>rd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["third-rating-Precautions"]}>
            {/* 첫 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 할인 적용
            </p>
            {/* 두 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1% 적립 적용
            </p>
            {/* 세 번째 3rd등급 설명 */}
            <p className={styles["third-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 2개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*2nd등급 숫자 및 설명 전체*/}
        <div className={styles.second}>
          {/* 등급 확인 */}
          <div className={styles["second-check-rating"]}>
            <p className={styles["second-number-rating"]}> 2 </p>
            <p className={styles["second-number-rating-e"]}>nd</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["second-rating-Precautions"]}>
            {/* 첫 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 할인 적용
            {/* 두 번째 2nd등급 설명 */}
            </p>
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              1.5% 적립 적용
            </p>
            {/* 세 번째 2nd등급 설명 */}
            <p className={styles["second-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              5%할인 쿠폰 1개, 10%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
        {/*1st등급 숫자 및 설명 전체*/}
        <div className={styles.first}>
          {/* 등급 확인 */}
          <div className={styles["first-check-rating"]}>
            <p className={styles["first-number-rating"]}> 1 </p>
            <p className={styles["first-number-rating-e"]}>st</p>
          </div>
          {/* 등급 설명 전체 */}
          <div className={styles["first-rating-Precautions"]}>
            {/* 첫 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 할인 적용
            </p>
            {/* 두 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              2% 적립 적용
            </p>
            {/* 세 번째 1st등급 설명 */}
            <p className={styles["first-rating-li"]}>
              <FontAwesomeIcon icon={faCircle} style={{width: "5px;", height: "5px", color: "#000000", opacity: "0.7", marginRight: "8px"}}/>
              10%할인 쿠폰 1개 15%할인 쿠폰 1개를 매월 정기적으로 지급
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default RatingNav;