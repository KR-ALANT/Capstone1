import {React, useState} from "react";
import styles from './MyOrder.module.css'
import Header from '../../header/Header'
import { Nav } from 'react-bootstrap'
import MyOrderNav from './MyOrderNav'

const MyOrder = () =>{
  let [tab, setTab] = useState(0)
  const [boardState, setBoardState] = useState("order")

  return(
    <div>
      <Header />
      <main>
        <div>
          <div className={styles.mo}>
            <p>My Order</p>
          </div>
          <Nav variant="tabs" defaultActiveKey="link0" className={styles["Order-inquiry"]}>
            <Nav.Item className={styles["order-history-button"]}>
              {/*원 5등분을 한 후 그에 맞게 탭으로 설정*/}
              <Nav.Link className = {boardState === "order" ? styles.orhb2 : styles.orhb1 } onClick={()=>{setTab(0); setBoardState("order");}} eventKey="link1">주문내역조회</Nav.Link>
              <Nav.Link className = {boardState === "cancle" ? styles.orhb3 : styles.orhb } onClick={()=>{setTab(1); setBoardState("cancle");}} eventKey="link2">취소/교환/반품내역</Nav.Link>
              <Nav.Link className = {boardState === "past" ? styles.orhb3 : styles.orhb } onClick={()=>{setTab(2); setBoardState("past");}} eventKey="link3">과거주문내역</Nav.Link>
            </Nav.Item>
            <MyOrderNav tab={tab}/>
          </Nav>
        </div>
      </main>
    </div>
  );
}

export default MyOrder;