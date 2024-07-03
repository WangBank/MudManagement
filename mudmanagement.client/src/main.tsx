import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "mobx-react";
import store from './store/basestore';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode >


)
