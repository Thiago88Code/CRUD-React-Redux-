import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import UsersReducer from"./features/UsersReducers"

const store = configureStore({
  reducer: {
    users: UsersReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

