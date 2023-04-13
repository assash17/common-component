import styled, { css } from "styled-components";

export const Switch = ({
  isOn = false,
  onToggle,
}: {
  isOn?: boolean;
  onToggle: () => void;
}) => {
  return (
    <div>
      <Track isOn={isOn} onClick={onToggle}>
        <Thumb isOn={isOn}></Thumb>
      </Track>
    </div>
  );
};

const Track = styled.div<{ isOn: boolean }>`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  ${({ isOn }) => {
    return isOn
      ? css`
          background-color: aqua;
        `
      : css`
          background-color: gray;
        `;
  }};
`;

const Thumb = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: white;
  ${({ isOn }) => {
    return isOn
      ? css`
          transform: translateX(30px);
        `
      : css`
          transform: translateX(0px);
        `;
  }};

  transition: transform 0.3s ease-out;
`;
