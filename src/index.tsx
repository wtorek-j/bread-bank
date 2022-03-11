import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/Root/Root';
import AppProviders from './providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
