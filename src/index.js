import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import LocalFetch from "./Pages/LocalFetch";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <LocalFetch></LocalFetch>
      </Fragment>
    );
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
