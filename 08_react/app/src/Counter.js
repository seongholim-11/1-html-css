/* import React, { Component } from "react";

export default class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      setNumber: 0,
    };
  }
  render() {
    const { number, setNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{setNumber}</h2>
        <button
          onClick={() => {this.setState(prevState => {
            return {
                number: prevState.number+1
            }
          })}}>+1</button>
      </div>
    );
  }
}
 */

/* import React, { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)

    function Up(){
        setNumber(number+1)
    }
  return (
    <div>
        <h1>{number}</h1>
        <button
          onClick={Up}
          >+1</button>
    </div>
  )
}

export default Counter; */

import React, { useState } from "react";

const Counter = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage('안녕하세요');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button >퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Counter;
