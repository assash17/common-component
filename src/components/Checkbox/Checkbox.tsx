import { FormEvent, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  isChecked: boolean;
  Label?: ReactNode;
  style?: React.CSSProperties;
  onChange?: (isChecked: boolean) => void;
}
export const CheckBox = ({
  value,
  isChecked,
  Label: LabelProp,
  style,
  onChange: onChangeProp,
}: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeProp?.(e.target.checked);
  };
  return (
    <Label style={style}>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={onChange}
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

CheckBox.Group = ({
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
