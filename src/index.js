import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import LocalFetch from "./Pages/LocalFetch";
import ContextLearn from "./Pages/Context";
import Main from "./Pages/TodoList";
import MainRedux from "./Pages/Redux";
import { Provider } from "react-redux";
import store from "./store";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <LocalFetch></LocalFetch>
        <ContextLearn></ContextLearn>
        <Main></Main>
        <Provider store={store}>
          <MainRedux></MainRedux>
        </Provider>
      </Fragment>
    );
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
