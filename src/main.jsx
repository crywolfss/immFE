// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import { WelcomeImm } from './pages/Imm/Welcome/WelcomeImm.jsx';
import { VerificationSuccess } from './pages/Imm/VerificationSuccess/VerificationSuccess.jsx';
import { Otp } from './pages/Imm/Otp/Otp.jsx';
import { Verification } from './pages/Imm/Verification/Verification.jsx';
import { RegisForm } from './pages/Imm/RegisForm/RegisForm.jsx';
import { ImmHome } from './pages/Imm/ImmHome/ImmHome.jsx';
import { Home } from './pages/Home/Home';
import Community from './pages/Community/Community';
import Profile from './pages/Profile/Profile';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import Layout from './components/Layouts/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use the Layout component
    children: [
      { path: '', element: <App /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'imm-welcome', element: <WelcomeImm /> },
      { path: 'imm-verification', element: <Verification /> },
      { path: 'imm-otp', element: <Otp /> },
      { path: 'imm-verification-success', element: <VerificationSuccess /> },
      { path: 'imm-registration-form', element: <RegisForm /> },
      { path: 'imm-home', element: <ImmHome /> },
      { path: 'home', element: <Home /> },
      { path: 'community', element: <Community /> },
      { path: 'bootcamp', element: <Bootcamp /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);