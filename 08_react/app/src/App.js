import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: "리액트의 기초 알아보기", checked: true },
        { id: 2, text: "컴포넌트 스타일링 해보기", checked: true },
        { id: 3, text: "일정 관리 앱 만들어보기", checked: false },
    ]);
    const nextId = useRef(4);
    console.log("🚀 ~ file: App.js:13 ~ App ~ nextId:", nextId);
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);
    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} />
            </TodoTemplate>
        </div>
    );
}

export default App;
