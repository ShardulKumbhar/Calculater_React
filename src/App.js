import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const resultInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  return (
    <div className="App">
  <div>
  // <img src="https://avatars.githubusercontent.com/u/98898362?v=4" alt="Logo" />;
  <h1 className="headerrr"> Devloped By <br/> 
  Shardul Kumbhar</h1>
  // <div className="gitlink">https://github.com/ShardulKumbhar</div>

  </div>
      <div className="calc-wapper">
        <Input text={text} result={result} />
       
        <div className="row">
          <Button symbol={"7"} handleClick={addToText} />
          <Button symbol={"8"} handleClick={addToText} />
          <Button symbol={"9"} handleClick={addToText} />
          <Button symbol={"/"} handleClick={addToText} color="pink" />
        </div>
        <div className="row">
          <Button symbol={"4"} handleClick={addToText} />
          <Button symbol={"5"} handleClick={addToText} />
          <Button symbol={"6"} handleClick={addToText} />
          <Button symbol={"*"} handleClick={addToText} color="pink" />
        </div>
        <div className="row">
          <Button symbol={"1"} handleClick={addToText} />
          <Button symbol={"2"} handleClick={addToText} />
          <Button symbol={"3"} handleClick={addToText} />
          <Button symbol={"+"} handleClick={addToText} color="pink" />
        </div>
        <div className="row">
          <Button symbol={"0"} handleClick={addToText} />
          <Button symbol={"."} handleClick={addToText} />
          <Button symbol={"="} handleClick={calculateResult} />
          <Button symbol={"-"} handleClick={addToText} color="pink" />
        </div>
        <Button symbol={"Clear"} color="red" handleClick={resultInput} />;
      </div>
    </div>
  );
};

export default App;
