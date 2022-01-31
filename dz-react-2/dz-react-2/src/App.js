import React from 'react';
import ProductList from './components/product-list/Product-list.js';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/favorites-component/Favorites.js';
import NavComponent from './components/nav-component/NavComponent.js';
import Buy from './components/buy-component/Buy.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer.js';
import thunk from 'redux-thunk';

const AppComponent = styled.div`
  min-width: 1200px;
  margin: 0;
  padding: 0;
  background-color: #1e1e20;
`;

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  img {
  max-width: 100%;
  height: auto;
      }

  a {
  text-decoration: none;
  color: var(--basic-white);
    }  
    .button {
    font-size: 10px;
    color: rgb(255, 255, 255);
    line-height: 1.8;
    text-transform: uppercase;
    border-radius: 8px;
    background-color: rgb(42, 42, 46);
    padding: 5px 6px;
    cursor: pointer;
    margin: 2px 2px 25px 2px;
  }
 }
`;

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppComponent>
          <GlobalStyle />
          <NavComponent />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/buy' element={<Buy />} />
          </Routes>
        </AppComponent>
      </Router>
    </Provider>
  );
}

export default App;
