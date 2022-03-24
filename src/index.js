import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [
//         ...store,
//         {
//           id: action.id,
//           complete: action.complete,
//           text: action.text
//         }
//       ];
//       case "TOGGLE_TODO":
//         return store.map(
//           todo =>
//             todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
//         );

//         case "FILTER_TODO":
//           return action.filter;
//     default:
//       return store;
//   }
// };

// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
