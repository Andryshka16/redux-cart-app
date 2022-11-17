import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import reducer from "./features/cart/cartSlice"
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
  reducer: {
    reducer
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
