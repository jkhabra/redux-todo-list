import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Todo from "./todo";
import "./App.scss";

function App() {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div className="App">
            <Todo />
          </div>
        </Provider>
      </PersistGate>
    </>
  );
}

export default App;
