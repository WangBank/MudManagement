import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/HomePage'
import './index.css'
import { Provider } from "mobx-react";
import store from './store/basestore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <App />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider {...store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode >


)
