/* 
import './App.css';
import Iteration from './Iteration';
// import ScrollBox from './Scrollbox';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
       <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨밑으로</button>
       <Iteration/>
      </div>
    );
  }
}

export default App; */


import './App.css';
import Iteration from './Iteration';
// import ScrollBox from './Scrollbox';
import React from 'react';

function App(){
  return(
    <div>
    {/*          <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
           <button onClick={()=>this.ScrollBox.scrollToBottom()}>맨밑으로</button> */}
           <Iteration/>
          </div>
  )
}


export default App