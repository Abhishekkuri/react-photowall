import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

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
    <h1>List of items</h1>
    <ol>
      {tasks.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ol>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
