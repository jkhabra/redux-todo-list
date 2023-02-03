import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, TodoProps } from "../redux/reducers/counterReducer";

const Todo = () => {
  const count = useSelector((state: TodoProps ) => state);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <p>{count.count}</p>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </>
  );
};

export default Todo;
