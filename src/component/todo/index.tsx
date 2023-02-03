import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTask,
  updateTask,
  deleteTask,
  TodoProps,
  TodoItenProp,
} from "../../redux/reducers/todoReducer";
import "./styles.scss";

const Header = (p: {
  title?: string;
  setText: Function;
  text: string;
}) => {
  const dispatch = useDispatch();

  const addTodo = () => {
    const task = p.text.trim();
    if (task) {
      dispatch(addTask({ text: p.text || "" }));
      p.setText("");
    }
  };

  return (
    <div className="header-continer">
      <h3>{p?.title || "Add new Todo"}</h3>
      <input
        name="addTodo"
        placeholder="Add new item"
        value={p.text}
        onChange={(e) => p.setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

const Todo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const todos = useSelector((state: TodoProps) => state.todoList);
  const dispatch = useDispatch();

 
  return (
    <>
      <div className="todo-container">
        <h2 className="title">Add Todo List</h2>

        <Header setText={setUserInput} text={userInput} />

        <div className="todo-list">
          {todos.map((todo: TodoItenProp) => (
            <div key={todo.id} className="todo">
              <span
                style={{ textDecoration: todo.isDone ? "line-through" : "" }}
              >
                {todo.text}
              </span>
              <div>
                <button onClick={() => dispatch(updateTask({ id: todo.id }))}>
                  ✓
                </button>
                <button onClick={() => dispatch(deleteTask({ id: todo.id }))}>
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
