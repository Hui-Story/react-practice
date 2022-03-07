import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

// 컴포넌트 최적화를 위하여 React.memo를 사용
export default React.memo(TodoList);
