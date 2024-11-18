import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CustomCalendar = ({ onChange, value }) => {
  const today = new Date();
  const [nowDate1, setNowDate1] = useState(`${today.getFullYear()}년 ${today.getMonth() - 2}월 ${today.getDate()}일`);
  const [nowDate2, setNowDate2] = useState(`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const ToggleCalendar1 = () => {
    setIsOpen1(!isOpen1);
  };

  const ToggleCalendar2 = () => {
    setIsOpen2(!isOpen2);
  };

  const TodayBtn = () => {
    setNowDate1(`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`)
  }

  const OneWeekBtn = () => {
    setNowDate1(`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate() - 7}일`)
  }

  const OneMonthBtn = () => {
    setNowDate1(`${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`)
  }

  const ThreeMonthBtn = () => {
    setNowDate1(`${today.getFullYear()}년 ${today.getMonth() - 2}월 ${today.getDate()}일`)
  }

  const SixMonthBtn = () => {
    setNowDate1(`${today.getFullYear()}년 ${today.getMonth() - 5}월 ${today.getDate()}일`)
  }

  const DateChange1 = (selectedDate1) => {
    onChange(selectedDate1);
    setIsOpen1(false);
    setNowDate1(moment(selectedDate1).format("YYYY년 MM월 DD일"));
  };

  const DateChange2 = (selectedDate2) => {
    onChange(selectedDate2);
    setIsOpen2(false);
    setNowDate2(moment(selectedDate2).format("YYYY년 MM월 DD일"));
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
        <DropdownButton onClick={ToggleCalendar1}>{nowDate1}</DropdownButton>
        <CalendarWrapper isOpen={isOpen1}>
          <Calendar onChange={DateChange1} value={value}></Calendar>
        </CalendarWrapper>
        <div>
          <p>~</p>
        </div>
        <DropdownButton onClick={ToggleCalendar2}>{nowDate2}</DropdownButton>
        <CalendarWrapper isOpen={isOpen2}>
          <Calendar onChange={DateChange2} value={value}></Calendar>
        </CalendarWrapper>
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