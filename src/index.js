import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import LocalFetch from "./Pages/LocalFetch";
import ContextLearn from "./Pages/Context";
import Main from "./Pages/TodoList";

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
      </Fragment>
    );
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
