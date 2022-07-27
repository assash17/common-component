import { useState } from "react";
import styled, { css } from "styled-components";

const list = Array(31)
  .fill(0)
  .map((data, index) => index + 1);

export const Test = () => {
  const [start, setStart] = useState<number>(14);
  const [end, setEnd] = useState<number>(14);
  const [down, setDown] = useState<number>(14);
  const [isDrag, setIsDrag] = useState(false);

  return (
    <Box>
      {list.map((data) => {
        return (
          <Data
            isSelected={start <= data && data <= end}
            onMouseDown={(e) => {
              if (e.shiftKey) {
                // 쉬프트 키
                if (data < start) {
                  setStart(data);
                  setEnd(end);
                } else {
                  setStart(start);
                  setEnd(data);
                }
              } else {
                setStart(data);
                setEnd(data);
                setIsDrag(true);
              }
              setDown(data);
            }}
            onMouseEnter={() => {
              if (isDrag) {
                if (down < data) {
                  setStart(down);
                  setEnd(data);
                } else {
                  setStart(data);
                  setEnd(down);
                }
              }
            }}
            onMouseUp={() => {
              if (isDrag) {
                if (down < data) {
                  setStart(down);
                  setEnd(data);
                } else {
                  setStart(data);
                  setEnd(down);
                }
              }
              setIsDrag(false);
            }}
          >
            {data}
          </Data>
        );
      })}
    </Box>
  );
};

const Box = styled.div`
  user-select: none;
  margin: 0 auto;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
`;

const Data = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  ${({ isSelected }) => {
    return (
      isSelected &&
      css`
        background-color: red;
      `
    );
  }}
`;
