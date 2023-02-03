import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/reducers/todoReducer";
import Listing from "../Listing";
import "./styles.scss";

const Header = (p: { title?: string; setText: Function; text: string }) => {
  const dispatch = useDispatch();

  const addTodo = () => {
    const task = p.text.trim();
    if (task) {
      dispatch(addTask({ text: p.text || "" }));
      p.setText("");
    }
  };

  const handleEnterPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
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
        onKeyDown={handleEnterPress}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

const Todo = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <>
      <div className="todo-container">
        <h2 className="title">Add Todo List</h2>

        <Header setText={setUserInput} text={userInput} />
        <div className="todo-list">
          <Listing />
        </div>
      </div>
    </>
  );
};

export default Todo;
