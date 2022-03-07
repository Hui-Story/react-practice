import React from "react";

function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

// 컴포넌트 최적화를 위하여 React.memo를 사용
export default React.memo(TodoItem);
