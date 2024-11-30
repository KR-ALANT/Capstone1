import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import './Calendar.css';

const CustomCalendar = ({ onChange }) => {
  const [nowDate1, setNowDate1] = useState(moment().subtract(3, 'month').toDate());
  const [nowDate2, setNowDate2] = useState(moment().toDate());
  const [isOpen, setIsOpen] = useState(null);

  const ToggleCalendar1 = () => {
    setIsOpen(isOpen === "calendar1" ? null : "calendar1");
  };

  const ToggleCalendar2 = () => {
    setIsOpen(isOpen === "calendar2" ? null : "calendar2");
  };

  const TodayBtn = () => {
    setNowDate1(moment().toDate());
    setNowDate2(moment().toDate());
  };

  const OneWeekBtn = () => {
    setNowDate1(moment().subtract(1, 'week').toDate());
    setNowDate2(moment().toDate());
  };

  const OneMonthBtn = () => {
    setNowDate1(moment().subtract(1, 'month').toDate());
    setNowDate2(moment().toDate());
  };

  const ThreeMonthBtn = () => {
    setNowDate1(moment().subtract(3, 'month').toDate());
    setNowDate2(moment().toDate());
  };

  const SixMonthBtn = () => {
    setNowDate1(moment().subtract(6, 'month').toDate());
    setNowDate2(moment().toDate());
  };

  const compare = () =>{
    if(nowDate1 > nowDate2) {
      alert("검색일이 시작일보다 이전 날짜입니다. \n종료일을 시작일 이후 일자로 수정해주세요.");
    }
  }

  const DateChange1 = (Date1) => {
    onChange(Date1);
    setIsOpen(null);
    setNowDate1(moment(Date1).toDate());
  };

  const DateChange2 = (Date2) => {
    onChange(Date2);
    setIsOpen(null);
    setNowDate2(moment(Date2).toDate());
  };

  return (
    <CalendarContainer>
      <Calednarbutton>
        <Calendarterm onClick={TodayBtn}>오늘</Calendarterm>
        <Calendarterm onClick={OneWeekBtn}>1주일</Calendarterm>
        <Calendarterm onClick={OneMonthBtn}>1개월</Calendarterm>
        <Calendarterm onClick={ThreeMonthBtn}>3개월</Calendarterm>
        <Calendarterm onClick={SixMonthBtn}>6개월</Calendarterm>
      </Calednarbutton>
      <CalendarCon>
        <DropdownButton onClick={ToggleCalendar1}>{moment(nowDate1).format("YYYY년 MM월 DD일")}</DropdownButton>
        {isOpen === "calendar1" && (
        <CalendarWrapper isOpen={isOpen}>
          <Calendar
            locale="ko"
            calendarType="gregory"
            onChange={DateChange1}
            value={nowDate1}
            formatDay={(locale, date) => moment(date).format("D")}
          ></Calendar>
        </CalendarWrapper>
        )}
        <div>
          <p>~</p>
        </div>
        <DropdownButton onClick={ToggleCalendar2}>{moment(nowDate2).format("YYYY년 MM월 DD일")}</DropdownButton>
        {isOpen === "calendar2" && (
        <CalendarWrapper isOpen={isOpen}>
          <Calendar
            locale="ko"
            calendarType="gregory"
            onChange={DateChange2}
            value={nowDate2}
            formatDay={(locale, date2) => moment(date2).format("D")}
          ></Calendar>
        </CalendarWrapper>
        )}
        <Inquiry onClick = {compare}>
          조회
        </Inquiry>
      </CalendarCon>
    </CalendarContainer>
  );
};

export default CustomCalendar;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Calednarbutton = styled.div`
  dispaly: flex;
  align-items: center;
`

const Calendarterm = styled.button`
  dispaly: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 25px;
  font-size: 12px;
  border: 0.7px solid #e5e5e5;
  background-color: white;
  cursor: pointer;
  &:hover{
    background-color: #f5f5f5;
  }
`

const CalendarCon = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
`

const DropdownButton = styled.button`
  width: 110px;
  height: 30px;
  border: 1px solid #cccccc;
  font-family: ChosunSm;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: center;
  appearance: none;
  background-color: white;
  background-repeat: no-repeat;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const Inquiry = styled.button`
  width: 30px;
  border: 1px solid #cccccc;
  height: 25px;
  background-color: #F5F5F5;
  cursor: pointer;
`