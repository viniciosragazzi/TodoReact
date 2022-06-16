import "./css/App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoReg from "./components/TodoReg";

const arrInfosS = [
  {
    nome: "",
    desc: "",
  },
];
const arrListS = [];
function App() {
  const [modeReg, setModeReg] = useState(false);
  const [arrInfos, setArrInfos] = useState(arrInfosS);
  const [arrList, setArrList] = useState(arrListS);
  const [arrComplets, setArrComplets] = useState([]);

  return (
    <div className="App">
      <TodoList
        arrList={arrList}
        setArrList={setArrList}
        arrComplets={arrComplets}
        setArrComplets={setArrComplets}
        arrInfos={arrInfos}
        setArrInfos={setArrInfos}
        modeReg={modeReg}
        setModeReg={setModeReg}
      />
      <TodoReg
        modeReg={modeReg}
        setModeReg={setModeReg}
        arrList={arrList}
        setArrList={setArrList}
        arrInfos={arrInfos}
        setArrInfos={setArrInfos}
      />
    </div>
  );
}

export default App;
