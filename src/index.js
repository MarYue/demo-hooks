import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Effect from './useEffectD'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Effect />, document.getElementById('effect'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
