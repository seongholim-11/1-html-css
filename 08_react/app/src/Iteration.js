import React, { useState } from "react";

const Iteration = () => {
  const [name, setName] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  function onClick() {
    const nextName = name.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId+1);
    setName(nextName);
    setInputText('')
  }

  const onRemove = id => {
    const nextName = name.filter(item => item.id !== id)
    setName(nextName);
  }
  const nameList = name.map((item) => <li key={item.id} onDoubleClick={()=>{onRemove(item.id)}}>{item.text}</li>);

  return (
    <div>
      <ul>{nameList}</ul>
      <input
        type="text"
        value={inputText}
        placeholder="입력해주세요"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick();
        }}
      >
        추가
      </button>
    </div>
  );
};

export default Iteration;
