import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

const addTaskAction = {
  type: "addTask",
  payload: "Nauczyć się Reduxa",
};

// tasksReducer(initialState, addTaskAction);
// console.log(state.tasks);

const selectTasks = ({ tasks }) => tasks;

const store = configureStore({ reducer: tasksReducer });
console.log(selectTasks(store.getState()));

store.dispatch({
  type: "addTask",
  payload: "Nauczyć się dispatch",
});
console.log(selectTasks(store.getState()));

store.dispatch({
  type: "addTask",
  payload: "Nauczyć się hooków",
});
console.log(selectTasks(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
