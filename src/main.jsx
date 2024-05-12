import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Footer } from './components/Footer/Footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}>
      
    </RouterProvider>
    <Footer/>
  </React.StrictMode>,
)
