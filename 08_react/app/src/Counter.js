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
  const [background, setBackground] = useState('yellow');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('바이~');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* JSX에서 객체 리터럴 형태로 style 속성을 작성할 때, 속성명과 값이 동일한 경우에는 축약해서 표현할 수 있습니다. 따라서 style={{ background }}는 style={{ background: background }}와 동일한 의미입니다. */}
      <h1 style={{background}}>{message}</h1>
      <button style={{color: 'red'}} onClick={()=>setBackground('red')}>빨간색</button>
      <button style={{color: 'green'}} onClick={()=>setBackground('blue')}>blue</button>
      <button style={{color: 'blue'}} onClick={()=>setBackground('green')}>green</button>
    </div>
  );
};

export default Counter;
