import React, { useState } from "react";

function Event(props) {
  const [message, setMessage] = useState("");

  function handleChange(e){
    setMessage(e.target.value)
  }

  function handleClick(e){
    alert(message)
    setMessage("");
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <button
        onClick={(e) => {
          handleClick(e)
        }}
      >
        I'm reset
      </button>
    </div>
  );
}

export default Event;
