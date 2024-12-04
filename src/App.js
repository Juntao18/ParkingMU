import React, {useState} from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './HomePage.js';
import Welcome from './Welcome.js';
import CarPark1 from './Car1.js';
import CarPark2 from './Car2.js';
import CarPark3 from './Car3.js';
import CarPark4 from './Car4.js';
import CarPark5 from './Car5.js';
import ParkingMap from './ParkingMap.js';
import parkingBg from './image/parking_bg.jpg';
import parkingBgv from './image/parking_bgv.mov';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${parkingBg});
    background-size: cover;
    background-position: center;
    position: relative; 
    overflow: hidden;
  }

  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 26, 26, 0.925); /* 黑色半透明覆盖 */
    z-index: -2; /* 放在内容后面 */
  }
`;

const VideoBackground = styled.video`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); /* 中心对齐 */
width: 100%;
height: 100%;
object-fit: cover; /* 保证视频填满容器 */
z-index: -1; /* 在文字下方，背景图片上方 */
opacity: 0.1; /* 设置透明度 */
`;

function App() {  
  const allSlotA = 10;
  const allSlotB = 3;
  const allSlotC = 50;
  const allSlotD = 8;
  const allSlotE = 15;
  const [slotA, setSlotA] = useState(allSlotA); 
  const [slotB, setSlotB] = useState(allSlotB); 
  const [slotC, setSlotC] = useState(allSlotC); 
  const [slotD, setSlotD] = useState(allSlotD);
  const [slotE, setSlotE] = useState(allSlotE);
  const initialGridA = Array(2).fill(Array(5).fill(false));
  const [gridA, setGridA] = useState(initialGridA);
  const initialGridB = Array(1).fill(Array(3).fill(false));
  const [gridB, setGridB] = useState(initialGridB);
  const initialGridC = Array(5).fill(Array(10).fill(false));
  const [gridC, setGridC] = useState(initialGridC);
  const initialGridD = Array(2).fill(Array(4).fill(false));
  const [gridD, setGridD] = useState(initialGridD);
  const initialGridE = Array(3).fill(Array(5).fill(false));
  const [gridE, setGridE] = useState(initialGridE);


  return (
    <div>
    <GlobalStyle />
    <VideoBackground autoPlay loop muted>
        <source src={parkingBgv} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {
          <HomePage 
            slotA={slotA} allSlotA={allSlotA}
            slotB={slotB} allSlotB={allSlotB}
            slotC={slotC} allSlotC={allSlotC}
            slotD={slotD} allSlotD={allSlotD}
            slotE={slotE} allSlotE={allSlotE}
          />
        }>
        <Route path = "map" element = {
            <ParkingMap/>
          }/>
        <Route index element={<Welcome />} />
          <Route path = "a" element = {
            <CarPark1 
              slot={slotA} setSlot={setSlotA} allSlot={allSlotA}
              grid={gridA} setGrid={setGridA}
            />}
          />
          <Route path = "b" element = {
            <CarPark2
              slot={slotB} setSlot={setSlotB} allSlot={allSlotB}
              grid={gridB} setGrid={setGridB}
            />}
          />
          <Route path = "c" element = {
            <CarPark3
              slot={slotC} setSlot={setSlotC} allSlot={allSlotC}
              grid={gridC} setGrid={setGridC}
            />}
          />
          <Route path = "d" element = {
            <CarPark4
              slot={slotD} setSlot={setSlotD} allSlot={allSlotD}
              grid={gridD} setGrid={setGridD}
            />}
          />
          <Route path = "e" element = {
            <CarPark5
              slot={slotE} setSlot={setSlotE} allSlot={allSlotE}
              grid={gridE} setGrid={setGridE}
            />}
          />    
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;