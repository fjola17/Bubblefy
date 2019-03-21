import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import App from './components/App';
import '../styles/site.css';
import reducers from './reducers';


ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><App /></Provider>, document.getElementById('app'));