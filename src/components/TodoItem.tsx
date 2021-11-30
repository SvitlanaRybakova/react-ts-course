import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div key={todo.id}>
      <input type="checkbox" id="todo" name="todo" checked={todo.completed}/>
      <label htmlFor="todo">{todo.title}</label>
    </div>
  );
};

export default TodoItem;
