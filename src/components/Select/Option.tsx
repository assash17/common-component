import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Option = ({
  value,
  children,
}: PropsWithChildren<{ value: string }>) => {
  return <Box data-value={value}>{children}</Box>;
};

const Box = styled.div`
  &:hover {
    background-color: red;
  }
`;
