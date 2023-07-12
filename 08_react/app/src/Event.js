import React, { useState } from "react";

function Event(props) {
  const [inputs, setInputs] = useState({ message: "", user: "" });


  //?
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("🚀 ~ file: Event.js:12 ~ handleChange ~ e:", e.target.name)
    console.log("🚀 ~ file: Event.js:12 ~ handleChange ~ e:", e.target.value)
    console.log("🚀 ~ file: Event.js:12 ~ handleChange ~ e:", inputs)
  };

  const handleClick = () => {
    const { user, message } = inputs;
    alert(`${user}: ${message}`);
    setInputs({ message: "", user: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={inputs.message}
        onChange={handleChange}
      />
      <input
        type="text"
        name="user"
        placeholder="사용자명"
        value={inputs.user}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <button onClick={handleClick}>I'm reset</button>
    </div>
  );
}

export default Event;

/* import React, { useState } from "react";

function Event(props) {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleUserChange(e) {
    setUser(e.target.value);
  }

  function handleClick(e) {
    alert(user + ':' + message);
    setMessage("");
    setUser("");
  }

  function handleKeyPress(e){
    if(e.key === 'Enter'){
      handleClick(e);
    }
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
          handleMessageChange(e);
        }}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={user}
        onChange={(e) => {
          handleUserChange(e);
        }}
        onKeyUp={(e) => {handleKeyPress(e)}}
      />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        I'm reset
      </button>
    </div>
  );
}

export default Event; */


/* import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      user: "",
    };
  }

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleUserChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleClick = (e) => {
    const { user, message } = this.state;
    alert(user + ':' + message);
    this.setState({ message: "", user: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick(e);
    }
  };

  render() {
    const { message, user } = this.state;

    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력하세요"
          value={message}
          onChange={this.handleMessageChange}
        />
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={user}
          onChange={this.handleUserChange}
          onKeyUp={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>I'm reset</button>
      </div>
    );
  }
}

export default Event;
 */