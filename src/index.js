import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ShopListReducer from './store/reducers/shopList';
import ShopReducer from './store/reducers/shop';

const rootReducer = combineReducers({ 
    shopListReducer: ShopListReducer, 
    shopReducer: ShopReducer 
})

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
