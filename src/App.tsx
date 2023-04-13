import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Option, Select } from "./components/Select";
import { CheckBoxExample } from "./example/CheckBoxExample";
import { RadioExample } from "./example/RadioExample";

function App() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="App">
      <CheckBoxExample></CheckBoxExample>
      <RadioExample></RadioExample>

      <Button size="large">button</Button>
      <Button size="middle">button</Button>
      <Button size="small">button</Button>

      <Button type="primary" size="large">
        button
      </Button>
      <Button type="primary" size="middle">
        button
      </Button>
      <Button type="primary" size="small">
        button
      </Button>

      <Select
        value={selectedValue}
        onChange={(newValue: string) => {
          setSelectedValue(newValue);
        }}
      >
        {["서울", "대전", "대구", "부산"].map((city: string) => {
          return <Option value={city}>{city}</Option>;
        })}
      </Select>
    </div>
  );
}

export default App;
