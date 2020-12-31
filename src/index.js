import React from "react";
import ReactDOM from "react-dom";
import Components from "./components.js";

import "./styles.css";

const data = {
  content: {
    body: [
      // {
      //   _uid: "BUY6Drn9e1",
      //   component: "foo",
      //   headline: "SideBar"
      // },
      // {
      //   _uid: "gJZoSLkfZV",
      //   component: "bar",
      //   title: "NavBar"
      // },
      // {
      //   _uid: "X1JAfdsZxy",
      //   component: "foo",
      //   headline: "CheckOut"
      // },
      {
        _uid: "X1JAfdsZqw",
        component: "cardDemo",
        headline: "This is card",
        title: "Motor Insuarance",
        body2: "Buy Motor insurance here."
      },
      {
        _uid: "X1JAfdsZqe",
        component: "cardDemo",
        headline: "This is card",
        title: "Travel Insuarance",
        body2: "Buy Travel insurance here."
      },
      {
        _uid: "X1JAfdsZqr",
        component: "cardDemo",
        headline: "This is card",
        title: "Health Insuarance",
        body2: "Buy Health insurance here."
      }
    ]
  }
};

function App() {
  return (
    <div className="App">
      <h1>Insurance Demo</h1>
      {data.content.body.map((block) => Components(block))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
