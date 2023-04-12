import "./App.css";
import { Button } from "./components/Button";
import { CheckBoxExample } from "./example/CheckBoxExample";
import { RadioExample } from "./example/RadioExample";

function App() {
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
    </div>
  );
}

export default App;
