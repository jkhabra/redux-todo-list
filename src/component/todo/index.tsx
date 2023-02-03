import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTask,
  updateTask,
  deleteTask,
  TodoProps,
  TodoItenProp
} from "../../redux/reducers/todoReducer";
import "./styles.scss";

const Todo = () => {
  const [userInput, setUserInput] = useState<string>("");
  const todos = useSelector((state: TodoProps) => state.todoList);
  const dispatch = useDispatch();

  const addTodo = () => {
    const task = userInput.trim();
    if (task) {
      dispatch(addTask({ text: userInput || "" }));
      setUserInput("");
    }
  };

  return (
    <>
      <div className="todo-conatiner">
        <h2>Todo List</h2>
        <input
          name="addTodo"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={addTodo}>Add</button>
        {todos.map((todo: TodoItenProp) => (
          <div key={todo.id} className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
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
    </>
  );
};

export default Todo;
