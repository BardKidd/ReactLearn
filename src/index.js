import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./TodoApp";


const App = () => {
  
  return (
    // 假如有被 Provider 包起來的話，就可以透過 Hooks 來取得 store 的內容
    <Fragment>
      <Provider store={store}>
        <TodoApp></TodoApp>
      </Provider>
    </Fragment>
  );
};

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
