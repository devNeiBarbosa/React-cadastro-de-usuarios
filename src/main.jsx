import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'
import {RouterProvider} from 'react-router-dom'
import router from './routes.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>
);