import React from "react";
import cn from 'classnames'
import "./TodoListItem.scss";
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

function TodoListItem(props) {
    const { text, checked } = props.todo;
    return (
        <div className="TodoListItem">
            <div className={cn("checkbox", {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;
