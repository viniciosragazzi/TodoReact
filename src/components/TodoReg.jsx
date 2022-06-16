import React, { useState } from "react";

export default function TodoReg({
  arrInfos,
  setArrInfos,
  arrList,
  setArrList,
  modeReg,
  setModeReg,
}) {
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const limparInputs = () => {
    const inputs = document.querySelectorAll("input.input");
    const buttons = document.querySelectorAll("button");
    inputs.forEach((input) => {
      input.value = "";
    });
    buttons.forEach((button) => {
      button.blur();
    });
    setNome("");
  };
  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (nome.length > 0) {
      const arrListCopia = [...arrList];
      arrListCopia.push(nome);
      setArrList(arrListCopia);
      setModeReg(!modeReg);
      limparInputs();
    } else {
      alert("Faltam informações a serem preenchidas.");
    }
  };
  const criarLista = (e) => {
    e.preventDefault();

    if (nome.length > 0 && desc.length > 0) {
      setArrInfos([
        {
          nome,
          desc,
        },
      ]);
      limparInputs();
    } else {
      alert("Faltam informações a serem preenchidas.");
    }
  };
  const cancel = (e) => {
    e.preventDefault();
    setModeReg(!modeReg);
  };

  return (
    <div className={`${modeReg ? "front" : "back"} todoReg card `}>
      <div className="container">
        <div className="titleArea">
          <h1 className="title">
            {arrInfos[0].nome.length > 0 ? "Adicionar tarefas" : "Criar Lista"}
          </h1>
          <p className="subtitle">
            {arrInfos[0].desc.length > 0
              ? " Adiciona abaixo suas tarefas."
              : "Crie abaixo uma nova lista de tarefas"}
          </p>
        </div>
        <div className="formArea">
          <form action="">
            {arrInfos[0].nome.length > 0 ? (
              <div className="formBox">
                <p className="titleInput">Titulo da nova tarefa</p>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                />
                <p className="titleInput">Descrição da nova tarefa</p>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setDesc(e.target.value)}
                />

                <div className="buttonArea">
                  <button onClick={(e) => adicionarTarefa(e)}>Adicionar</button>
                  <button className="cancelar" onClick={(e) => cancel(e)}>
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="formBox">
                <p className="titleInput subtitle">Titulo da lista de tarefa</p>
                <input
                  className="input"
                  type="text"
                  placeholder="Digite aqui"
                  onChange={(e) => setNome(e.target.value)}
                />
                <p className="titleInput subtitle">
                  Descrição da lista de tarefa
                </p>
                <input
                  className="input"
                  type="text"
                  placeholder="Digite aqui"
                  onChange={(e) => setDesc(e.target.value)}
                />

                <div className="buttonArea">
                  <button onClick={(e) => criarLista(e)}>Criar Lista</button>
                  <button className="cancelar" onClick={(e) => cancel(e)}>
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
