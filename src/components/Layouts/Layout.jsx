import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.jsx';
import { Footer } from '../Footer/Footer.jsx';
import ImmNavbar from '../Navbar/ImmNavbar.jsx';
import LoginNavbar from '../Navbar/LoginNavbar.jsx';

const Layout = () => {
    const location = useLocation();
    const noFooterRoutes = [
        '/login',
        '/register',
        '/imm-welcome',
        '/imm-verification',
        '/imm-otp',
        '/imm-verification-success',
        '/imm-registration-form',
    ];
    const noNavbarRoutes = [
        '/imm-home',
        '/imm-myproject',
        '/imm-create',
        '/form-update',
        '/imm-profile',
        '/imm-status',
        '/forum',
        '/form-create'
    ];
    const loginNavbarRoutes = [
        '/login',
        '/register',
    ];

    const shouldRenderFooter = !noFooterRoutes.includes(location.pathname);
    const shouldRenderNavbar = !noNavbarRoutes.includes(location.pathname) && !loginNavbarRoutes.includes(location.pathname);
    const shouldRenderImmNavbar = noNavbarRoutes.includes(location.pathname);
    const shouldRenderLoginNavbar = loginNavbarRoutes.includes(location.pathname);

    return (
        <div>
            {shouldRenderNavbar && <Navbar />}
            {shouldRenderImmNavbar && <ImmNavbar />}
            {shouldRenderLoginNavbar && <LoginNavbar />}
            <main>
                <Outlet />
            </main>
            {shouldRenderFooter && <Footer />}
        </div>
    );
};

export default Layout;