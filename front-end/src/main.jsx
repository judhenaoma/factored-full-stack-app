import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/NotFound/NotFoundPage'
// import { LoginForm } from './pages/Login/LoginForm'
import { LoginPage } from './pages/Login/LoginPage'
import { App } from './App'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <h1>Root</h1>,
//     },
//     {
//       path: '/login',
//       element: <App/>,
//     },
//   ]
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
