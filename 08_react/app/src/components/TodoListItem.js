import React from "react";
import cn from 'classnames'
import "./TodoListItem.scss";
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";

function TodoListItem(props) {
    const { text, checked, id } = props.todo;
    return (
        <div className="TodoListItem">
            <div className={cn("checkbox", {checked})} onClick={()=>props.onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>props.onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;
