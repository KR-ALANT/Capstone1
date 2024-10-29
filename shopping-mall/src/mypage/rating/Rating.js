import { React, useState } from 'react';
import styles from './Rating.module.css';
import Header from '../../header/Header.js'
import { Nav } from 'react-bootstrap'
import RatingNav from './RatingNav.js';


const Rating = () =>{
  let [tab, setTab] = useState(0)

  return(
    <div>
      <Header />
      <main>
        <div>
          {/*Rating*/}
          <div className={styles.mr}>
            <p>Rating</p>
          </div>
          {/*등급 문구 바깥 큰 테두리*/}
          <div className={styles.yourrating}>
            {/*등급 문구 전체*/}
            <div className={styles["yourrating-content"]}>
              <p className={styles["yourrating-content-k"]}>당신은</p>
              <p className={styles["yourrating-content-n"]}>5</p>
              <p className={styles["yourrating-content-e"]}>th</p>
              <p className={styles["yourrating-content-k"]}>등급이다.</p>
            </div>
          </div>
          {/*등급 설명 및 원 그래프 바깥 큰 테두리*/}
          <div className={styles.myrating}>
            {/*등급 설명 및 원 그래프*/}
            <Nav variant="tabs" defaultActiveKey="link0" className={styles["circle-result"]}>
              {/*등분된 원들 클릭시 선택값에 따라 결과값 호출*/}
              <RatingNav tab={tab}/>
              {/*원 만드는 방법*/}
              <Nav.Item className={styles.circle}>
                  {/*원 5등분을 한 후 그에 맞게 탭으로 설정*/}
                  <Nav.Link onClick={()=>{setTab(5)}} eventKey="link5" className={styles.slice}></Nav.Link>
                  <Nav.Link onClick={()=>{setTab(4)}} eventKey="link4" className={styles.slice}></Nav.Link>
                  <Nav.Link onClick={()=>{setTab(3)}} eventKey="link3" className={styles.slice}></Nav.Link>
                  <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2" className={styles.slice}></Nav.Link>
                  <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1" className={styles.slice}></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          {/*유의사항 전체*/}
          <div className={styles["guide-precautions"]}>
            {/*유의사항*/}
            <p className={styles.precautions}>유의사항</p>
            <div className={styles["guide-precautions-content"]}>
              {/*첫 번째 쿠폰 이용 안내 문구*/}
              <div className={styles["guide-content"]}>
                <p className={styles.number}>1</p>
                <p>회원 등급은 로그인, 마이페이지 접속시 갱신됩니다.</p>
              </div>
              {/*두 번째 쿠폰 이용 안내 문구*/}
              <div className={styles["guide-content"]}>
                <p className={styles.number}>2</p>
                <p>등급을 부여받은 날짜 기준으로 3개월동안 결제 금액이 0원일 경우, 등급이 한단계 하락합니다.</p>
              </div>
              {/*세 번째 쿠폰 이용 안내 문구*/}
              <div className={styles["guide-content"]}>
                <p className={styles.number}>3</p>
                <p>회원 등급 기준 및 혜택은 M.F.정책에 의해 변경될 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rating;