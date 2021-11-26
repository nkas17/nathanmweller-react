import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './Routes';

import './styles/font-awesome.min.css';
import './styles/styles.css';

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextApp = require('./Routes').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
