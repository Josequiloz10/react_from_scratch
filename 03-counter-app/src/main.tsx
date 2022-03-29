import React from 'react';
import ReactDOM from 'react-dom'
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

//@ts-ignore
const divRoot = document.querySelector('#app')

ReactDOM.render(<CounterApp value={10}/>, divRoot);
// ReactDOM.render(<CounterApp value={0}/>, divRoot);