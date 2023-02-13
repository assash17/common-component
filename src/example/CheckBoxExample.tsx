import { useState } from "react";
import { CheckBox } from "../components/Checkbox/Checkbox";

const dataList = [
  {
    value: "A",
    Label: <span>A</span>,
  },
  {
    value: "B",
    Label: <span>B</span>,
  },
  {
    value: "C",
    Label: <span>C</span>,
  },
  {
    value: "D",
    Label: <span>D</span>,
  },
];

const data = {
  value: "A",
  Label: <span>A</span>,
};

export const CheckBoxExample = () => {
  const [selectedValueList, setSelectedValueList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const changeValue = (newValue: string) => {
    if (selectedValueList.includes(newValue)) {
      setSelectedValueList((prev) =>
        prev.filter((value) => value !== newValue)
      );
    } else {
      setSelectedValueList((prev) => [...prev, newValue]);
    }
  };

  const changeChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };
  return (
    <>
      <div>
        <div>그룹 사용</div>
        <CheckBox.Group onChangeValue={changeValue}>
          {dataList.map((data) => {
            const isChecked = selectedValueList.includes(data.value);
            return <CheckBox {...data} isChecked={isChecked}></CheckBox>;
          })}
        </CheckBox.Group>
      </div>
      <div>
        <div>단독 사용</div>
        <CheckBox
          {...data}
          isChecked={isChecked}
          onChange={changeChecked}
        ></CheckBox>
      </div>
    </>
  );
};
