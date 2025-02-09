import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.jsx';
import state from "../Redux/state.js";

ReactDOM.render(<App state={state}/>, document.getElementById('root'));