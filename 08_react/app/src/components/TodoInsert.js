import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert({onInsert}) {
    const [value, setValue] = useState("");
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onsubmit = useCallback((e) => {
      e.preventDefault();
      onInsert(value);
      setValue('')
    }, [onInsert, value]);
    return (
        <form className="TodoInsert" onSubmit={onsubmit}>
            <input
                type="text"
                placeholder="할일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;
