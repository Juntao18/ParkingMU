import React from 'react';
import styled from 'styled-components';

const RedBoldSpan = styled.span`
  color: red;
  font-weight: bold;  
`
const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);  
  grid-template-rows: repeat(2, 50px);      
  gap: 10px; 
  place-items: center; 
`;

const TableCell = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isOccupied ? "red" : "green")};
  border: 1px solid black;
  cursor: pointer;
`;

const SectionEDisplay = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  background-color: rgba(255, 255, 255, 0); 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  z-index: 1;
`

const H3 = styled.h3`
  color: #fcfcfc; 
  font-size: 30px;
  margin-bottom: 10px;
`

const H4 = styled.h4`
  color: #fcfcfc; 
  font-size: 30px;
  margin-bottom: 10px;
`

function SectionE(props){
    
    function toggleColor(rowIndex, colIndex) {
        const newGrid = props.grid.map((row, rIndex) =>
            row.map((cell, cIndex) =>
                rIndex === rowIndex && cIndex === colIndex ? !cell : cell
            )
        );
        props.setGrid(newGrid);

        const isCurrentlyRed = props.grid[rowIndex][colIndex];
        isCurrentlyRed ? props.setSlot(props.slot + 1) : props.setSlot(props.slot - 1);
    };

    return(
        <SectionEDisplay>
            <H3>CarPark5</H3>
            {props.slot == 0 ? 
                <H4>
                    There is 
                    <RedBoldSpan> no slots </RedBoldSpan>
                    in Car Park 5
                </H4> :
                <H4>
                    There are 
                    <RedBoldSpan> {props.slot} / {props.allSlot} </RedBoldSpan>
                    parking slots in Car Park 5. 
                </H4>
            }
            <TableContainer>
            {props.grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                <TableCell
                    key={`${rowIndex}-${colIndex}`}
                    isOccupied={cell}
                    onClick={() => toggleColor(rowIndex, colIndex)}
                />
                ))
            )}
            </TableContainer>            
            </SectionEDisplay>
    )
}

export default SectionE;