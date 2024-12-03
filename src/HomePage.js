import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate, Outlet} from 'react-router-dom';
import "./css/Welcome.css";

const RedBoldSpan = styled.span`
  color: red;
  font-weight: bold;  
`
const StyledSelect = styled.select`
  width: 200px; /* 设置宽度 */
  height: 50px; /* 设置高度 */
  font-size: 18px; /* 调整字体大小 */
  background-color: #f0f0f0; /* 背景颜色 */
  border: 2px solid #007bff; /* 边框颜色 */
  border-radius: 5px; /* 圆角 */
  color: #333; /* 字体颜色 */
  padding: 5px; /* 内边距 */
  margin-top: 20px; /* 顶部间距 */
  cursor: pointer; /* 鼠标样式 */
  outline: none; /* 去掉聚焦时的默认边框 */
  transition: all 0.3s ease; /* 添加过渡效果 */

  &:hover {
    background-color: #e6f0ff; /* 鼠标悬停时背景颜色 */
  }

  &:focus {
    border-color: #0056b3; /* 聚焦时边框颜色 */
    box-shadow: 0 0 5px rgba(0, 91, 187, 0.5); /* 聚焦时阴影 */
  }
`;

function HomePage(props){
    const navigate = useNavigate();
    const [section, setSection] = useState("welcome");
    const allSlotNumber = Number(props.allSlotA)
     + Number(props.allSlotB)
     + Number(props.allSlotC)
     + Number(props.allSlotD)
     + Number(props.allSlotE);
  
    const remainSlotNumber = Number(props.slotA)
    + Number(props.slotB)
    + Number(props.slotC)
    + Number(props.slotD)
    + Number(props.slotE);
  
    function handleSelectChange(event){
      const selectedSection = event.target.value
      setSection(selectedSection);
      navigate(selectedSection === "welcome" ? "/" : `/${selectedSection}`);
    }
  
    return(
      <div className = "HomePage">
        <h1>Maynooth Parking </h1>
        <h3>
          There are 
          <RedBoldSpan> {remainSlotNumber} / {allSlotNumber} </RedBoldSpan>
          parking slots from Maynooth University. 
        </h3>
        <StyledSelect value ={section} onChange = {handleSelectChange}>
          <option value="welcome">Welcome</option>
          <option value = "a">Car Park 1</option>
          <option value = "b">Car Park 2</option>
          <option value = "c">Car Park 3</option>
          <option value = "d">Car Park 4</option>
          <option value = "e">Car Park 5</option>
        </StyledSelect>
  
        <Outlet />
      </div>
    )
}

export default HomePage;