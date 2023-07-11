import React from "react";
import "./App.css";
import Mycomponent from "./Mycomponent";

function App() {
  return (
    <div>
      <Mycomponent name="리액트" favoriteNumber={3}>리액트</Mycomponent>
    </div>
  );
}

export default App;

/* class App extends Component {
  render() {
    const name = "react"
    return (
      <div>{name}</div>
      )
    } 
  }
  */
