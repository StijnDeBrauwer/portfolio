import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { initCssVariables } from 'src/helpers/style.helpers';
import 'src/assets/fonts/fonts.style.scss';

import App from './App';

initCssVariables();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
