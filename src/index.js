import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import "./styles.css";
import "./Styles/stylesheet.css";

import Main from "./Components/Main";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see </h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
const tasks = ["kjhksgsg", "asgasg", "gasgafg"];
// const element = React.createElement(
//   "ol",
//   null,
//   tasks.map((task, index) => {
//     return React.createElement("li", { key: index }, task);
//   })
// );

const element = (
  <div>
    <Main />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
