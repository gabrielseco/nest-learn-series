import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './containers';

require('./styles/main.scss');

const app = (
  <Router>
    <div>
      <App />
    </div>
  </Router>
);

render(app, document.getElementById('root'));
