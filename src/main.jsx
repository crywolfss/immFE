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
import { ImmProfile } from './pages/Imm/ImmProfile/immprofile.jsx';
import { ImmStatus } from './pages/Imm/Status/status.jsx';
import { MyProject } from './pages/Imm/MyProject/MyProject.jsx';
import { ImmCreate } from './pages/Imm/Create/ImmCreate.jsx';
import Forum from './pages/Imm/Forum/forum.jsx';
import { Home } from './pages/Home/Home';
import Community from './pages/Community/Community';
import Blog from './pages/Blog/blog';
import Profile from './pages/Profile/Profile';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import Layout from './components/Layouts/Layout.jsx';
import FormCreate from './pages/Imm/Create/FormCreate.jsx';
import FormUpdate from './pages/Imm/Create/FormUpdate.jsx';

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
      { path: 'imm-profile', element: <ImmProfile /> },
      { path: 'imm-status', element: <ImmStatus /> },
      { path: 'imm-myproject', element: <MyProject />},
      { path: 'imm-create', element: <ImmCreate />},
      { path: 'form-create', element: <FormCreate />},
      { path: 'form-update', element: <FormUpdate />},
      { path: 'forum', element: <Forum />},
      { path: 'home', element: <Home /> },
      { path: 'community', element: <Community /> },
      { path: 'bootcamp', element: <Bootcamp /> },
      { path: 'blog', element: <Blog /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);