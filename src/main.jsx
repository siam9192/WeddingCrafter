import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import Router from './Components/Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}>

    </RouterProvider>
  </React.StrictMode>,
)
