import React from "react";
import "./TodoTemplate.scss";

function TodoTemplate(props) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{props.Children}</div>
    </div>
  );
}

export default TodoTemplate;
