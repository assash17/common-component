import { PropsWithChildren, useState } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

export const Select = ({
  value,
  onChange,
  children,
}: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ width: "100px" }}>
      <Title
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {value || "선택해주세요"}
        <span>{isOpen ? "▲" : "▼"}</span>
      </Title>
      {isOpen && (
        <OptionBox
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const clickedValue = (e.target as HTMLDivElement).dataset.value;

            if (clickedValue !== undefined && clickedValue !== value) {
              onChange(clickedValue);
            }
            setIsOpen(false);
          }}
        >
          {children}
        </OptionBox>
      )}
    </div>
  );
};

const Title = styled.div`
  border: 1px solid black;
`;

const OptionBox = styled.div`
  border: 1px solid black;
`;
