import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components"

const SelectBox = styled.div`
  position: relative;
  width: 125px;
  height: 40px;
  padding: 10px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #cccccc;

  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 4px;
    right: 8px;
    color: #777777;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Label = styled.label`
  font-size: 18px;
  display: inline-block;
  cursor: pointer;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  max-height: 100px;
  overflow-y: auto;
  height: 80px;
  // show가 아닌 상태에서 테두리를 없앤다
  border: ${(props) => (props.show ? "1px solid #cccccc;" : "none")};
  max-height: ${(props) => (props.show ? "none" : "0")};
  background-color: #fefefe;
`;

const Option = styled.li`
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: black;
    //hover 색상 후보
    background: linear-gradient(132deg, #F5F5F5 0%, #F5F5F5 100%);
    /*background-color: #dadada;*/
    /*background-color: #le90ff;*/
  }
`;

export const PastDropdown = (props) => {
  const list = props.props.data;
  const selectRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(list[0]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  useEffect(() =>{
    // NOTE Dropdwon 박스 바깥쪽을 클릭시 옵션이 사라지는 기능
    function handleClickOutside(event){
      if(selectRef.current && !selectRef.current.contains(event.target)){
        // dom 바깥 클릭
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside); 
    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return(
    <SelectBox onClick={()=> setShowOptions((prev) => !prev)} ref={selectRef}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {list.map((data, index)=> (
          <Option key={index} value={data} onClick={handleOnChangeSelectValue}>
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

//props Default vlaue
PastDropdown.defaultProps ={
  name: "초기값"
}