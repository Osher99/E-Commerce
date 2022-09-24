import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from './redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import cartReducer from './redux/reducer/cartReducer';
import prodcutsReducer from './redux/reducer/prodcutsReducer';

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  products: prodcutsReducer,
  cart: cartReducer
})

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
