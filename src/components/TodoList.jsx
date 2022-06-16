import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { TbMoodEmpty } from "react-icons/tb";
export default function TodoList({
  arrComplets,
  arrInfos,
  setArrInfos,
  arrList,
  setArrList,
  modeReg,
  setModeReg,
}) {
  const [arrC, setArrC] = useState(arrComplets);
  const [arrI, setArrI] = useState(arrList);

  useEffect(() => {
    setArrI(arrList)
  }, [arrList])
  
  const del = (i, key) => {
    const arrCopia = [...arrI];
    arrCopia.splice(key, 1);
    setArrI(arrCopia);
    setArrList(arrCopia);

    const arrDelCopia = [...arrC];
    arrDelCopia.push(i);
    setArrC(arrDelCopia);
    if(arrI.length === 1){
      setArrC([])
      setArrInfos([
        {
          nome: "",
          desc: "",
        },
      ])
      setTimeout(() => {
        alert('Todas as tarefas foram concluidas.')
      }, 500);
    }
  };
  const incomplet = (i, key) => {
    const arrDelCopia = [...arrC];
    arrDelCopia.splice(key, 1);
    setArrC(arrDelCopia);

    const arrCopia = [...arrI];
    arrCopia.push(i);
    setArrI(arrCopia);

  };

  return (
    <div className={` ${modeReg ? "back" : "front"} todoList card`}>
      {arrList.length > 0 &&
      arrInfos[0].nome.length > 0 &&
      arrInfos[0].desc.length > 0 ? (
        <div className="container">
          <div>
            <div className="titleArea">
              <h1 className="title">{arrInfos[0].nome}</h1>
              <p className="subtitle">{arrInfos[0].desc}</p>
            </div>
            {arrI.length > 0 ? (
              <div className="todosList">
                <ul id="ulList">
                  {arrI.map((i, key) => (
                    <li key={key} className="flex">
                      <label
                        onClick={(e) => {
                          del(i, key);
                        }}
                        className="circle"
                        htmlFor="banana"
                      ></label>
                      <input type="checkbox" name="banana" id="banana" />
                      <label
                        onClick={(e) => {
                          completed(i, key);
                        }}
                        htmlFor="banana"
                      >
                        {i}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {arrC.length > 0 ? (
              <div className="todosListComplete">
                <h2>COMPLETED ({arrC.length})</h2>
                <ul>
                  {arrC.map((i, key) => (
                    <li key={key} className="flex">
                      <label
                        onClick={(e) => {
                          incomplet(i, key);
                        }}
                        className="circle"
                        htmlFor="banana"
                      >
                        <AiOutlineCheck />
                      </label>
                      <input type="checkbox" name="banana" id="banana" />
                      <label
                        onClick={(e) => {
                          incomplet(i, key);
                        }}
                        htmlFor="banana"
                      >
                        {i}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="container empty-card">
          <div className="todosVazias">
            <h1>Nenhuma tarefa encontrada</h1>
            <TbMoodEmpty />
          </div>
        </div>
      )}

      <button id="btnAdd" onClick={() => setModeReg(!modeReg)}>
        <AiOutlinePlus />
      </button>
    </div>
  );
}
