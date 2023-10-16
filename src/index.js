import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ShopListReducer from './store/reducers/shopList';
import ShopReducer from './store/reducers/shop';
import authReducer from './store/reducers/auth-reducer';
import adminReducer from './store/adminStore/adminReducer';


const rootReducer = combineReducers({ 
    adminReducer: adminReducer,
    shopListReducer: ShopListReducer, 
    shopReducer: ShopReducer,
    authReducer: authReducer
})

const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/auth">
      <Provider store={store}>
         <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
