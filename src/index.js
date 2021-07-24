import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// // 1. Store - Global State

// // 2. Action - define what to do

// const petIncrement = () => {
//   return {
//     type: "PET_INCREASED",
//   }
// }

// const petDecrement = () => {
//   return {
//     type: "PET_DECREASED"
//   }
// }

// // 3. Reducer - describe how an action change from one state to another
// // reducer will check witch action call and store will be modified

// const petCounter = (state = 0, action) => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1
//     case "PET_DECREASED":
//       return state - 1
//     default:
//       return state
//   }
// }

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// store.subscribe(() => { console.log(store.getState()) })

// // 4. Dispatch -  perform the action to reducer
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
