import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { Provider } from './Context/BlogContext';

ReactDOM.render(
  <Provider>
  <App />
  </Provider>, 
  document.querySelector("#root"));
