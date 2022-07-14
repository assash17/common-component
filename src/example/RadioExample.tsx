import { useState } from "react";
import { Radio } from "../Component/Radio";

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

export const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const changeValue = (newValue: string) => {
    setSelectedValue(newValue);
  };

  const changeChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };
  return (
    <>
      <div>
        <div>그룹 사용</div>
        <Radio.Group changeValue={changeValue}>
          {dataList.map((data) => {
            const isChecked = selectedValue === data.value;
            return <Radio {...data} isChecked={isChecked}></Radio>;
          })}
        </Radio.Group>
      </div>
      <div>
        <div>단독 사용</div>
        <Radio
          {...data}
          isChecked={isChecked}
          changeChecked={changeChecked}
        ></Radio>
      </div>
    </>
  );
};
