import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

// import { createStore, applyMiddleware } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";

import { database } from "./Database/config";

import thunk from "redux-thunk";

// import "./styles.css";
import "./Styles/stylesheet.css";

// import Main from "./Components/Main";
import App from "./Components/App";

// const composeEnhancer =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

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
// const tasks = ["kjhksgsg", "asgasg", "gasgafg"];
// const element = React.createElement(
//   "ol",
//   null,
//   tasks.map((task, index) => {
//     return React.createElement("li", { key: index }, task);
//   })
// );

// const element = (
//   <div>
//     <Main />
//   </div>
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
