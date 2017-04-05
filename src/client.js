// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/containers/App';

const message: string = 'App is running';
console.log(message);

ReactDOM.render((
  <App />
), document.getElementById('app'));
