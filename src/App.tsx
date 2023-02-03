import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Todo from "./todo";
import "./App.css";

function App() {
  return (
    <>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div className="App">
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>

            <Todo />
          </div>
        </Provider>
      </PersistGate>
    </>
  );
}

export default App;
