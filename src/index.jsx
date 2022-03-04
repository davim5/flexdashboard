import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/global';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title:'Salario',
          value: 8000,
          date: new Date('01-01-2022'),
          type:'deposit' ,
          category: 'Salario'
        },
        {
          id: 2,
          title:'Aluguel',
          value: 1000,
          date: new Date('02-01-2022'),
          type:'withdraw' ,
          category: 'Moradia'
        },
        {
          id: 3,
          title:'Condominio',
          value: 500,
          date: new Date('02-01-2022'),
          type:'withdraw' ,
          category: 'Moradia'
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
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

