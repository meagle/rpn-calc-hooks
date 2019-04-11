import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Results from './components/Results';
import KeyboardContainer from './components/KeyboardContainer';

const app = (
  <App>
    <Results />
    <KeyboardContainer />
  </App>
);

ReactDOM.render(app, document.getElementById('root'));
