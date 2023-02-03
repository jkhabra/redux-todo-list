import { useSelector, useDispatch } from "react-redux";

import {
  updateTask,
  deleteTask,
  TodoProps,
  TodoItenProp,
} from "../../redux/reducers/todoReducer";
import "./styles.scss";

const Listing = () => {
  const todos = useSelector((state: TodoProps) => state.todoList);
  const dispatch = useDispatch();

  if (!todos.length) {
    return (
      <div className="no-item">
        <span>No item found!</span>
      </div>
    );
  }

  return (
    <>
      {todos.map((todo: TodoItenProp) => (
        <div key={todo.id} className="todo">
          <span
            title={todo.text}
            style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          >
            {todo.text}
          </span>
          <div className="todo-buttons">
            <button
              className={`${todo.isDone && "done"}`}
              title={todo.isDone ? "undo" : "done"}
              onClick={() => dispatch(updateTask({ id: todo.id }))}
            >
              ✓
            </button>
            <button
              className="del"
              title="delete"
              onClick={() => dispatch(deleteTask({ id: todo.id }))}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Listing;
