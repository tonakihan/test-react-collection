import React from "react";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
