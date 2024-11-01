import { React } from 'react';
import styles from './MyOrderNav.module.css'
import { Dropdown } from './Dropdwon.js';

const smapleData = {data : ["전체 주문처리상태", "입금전", "배송준비중", "배송중", "배송완료", "취소", "교환", "반품"]}

const MyOrderNav = ({ tab }) =>{
  if (tab===0){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops"]}>
              {/*전체 주문처리 상태*/}
              <div>
                <Dropdown props={smapleData}/>
              </div>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div>
            {/*주문내역 안내 문구*/}
          </div>
        </div>
        <div>
          {/*주문 상태 정보*/}
          <div>
          </div>
          <div>
            {/*주문일자 등등*/}
            <div>

            </div>
            {/*주문 내역 없습니다.*/}
          </div>
        </div>
      </div>
    )
  } else if(tab===1){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops"]}>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div>
            {/*주문내역 안내 문구*/}
          </div>
        </div>
      </div>
    )
  } else if(tab===2){
    return(
      <div>
        <div className={styles["order-status"]}>
          <div className={styles["order-processing-status"]}>
            <div className={styles["ops"]}>
              <div>

              </div>
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div>
            {/*주문내역 안내 문구*/}
          </div>
        </div>
      </div>
    )
  }
}

export default MyOrderNav;