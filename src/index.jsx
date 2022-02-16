import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';

import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/conversations', () => {
      return [
        {
          id: 1,
          type: 'conversations',
          amount:'215',
          date: new Date(2022,1),
        },
        {
          id: 2,
          type: 'conversations',
          amount:'312',
          date: new Date(2022,2),
        },
        {
          id: 3,
          type: 'conversations',
          amount:'180',
          date: new Date(2022,3),
        },
        {
          id: 4,
          type: 'conversations',
          amount:'239',
          date: new Date(2022,4),
        },
        {
          id: 5,
          type: 'conversations',
          amount:'287',
          date: new Date(2022,5),
        },
        {
          id: 6,
          type: 'conversations',
          amount:'301',
          date: new Date(2022,6),
        },
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

