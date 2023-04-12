import { FormEvent, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  isChecked: boolean;
  Label?: ReactNode;
  style?: React.CSSProperties;
  onChange?: (isChecked: boolean) => void;
}

export const Radio = ({
  value,
  isChecked,
  Label: LabelProp,
  style,
  onChange: onChangeProp,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeProp?.(e.target.checked);
  };
  return (
    <Label style={style}>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={handleChange}
      ></input>
      {LabelProp}
    </Label>
  );
};

const Label = styled.label``;

interface GroupProps {
  onChangeValue?: (newValue: string) => void;
  style?: React.CSSProperties;
}

Radio.Group = ({
  onChangeValue,
  style,
  children,
}: PropsWithChildren<GroupProps>) => {
  const onChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    onChangeValue?.(value);
  };

  return (
    <div style={style} onChange={onChange}>
      {children}
    </div>
  );
};
