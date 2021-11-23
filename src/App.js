import React from "react";
import TodoApp from "./Component/TodoApp";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Component/Redux/Store/Store";
import TodoLists from "./Component/TodoLists";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./Component/Redux/Store/Store";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <h3>Todo Application</h3>
          <TodoApp />
          <TodoLists />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
