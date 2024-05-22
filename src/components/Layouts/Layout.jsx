import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.jsx';
import { Footer } from '../Footer/Footer.jsx';
import ImmNavbar from '../Navbar/ImmNavbar.jsx';

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
        '/imm-profile',
        '/imm-status',
        '/forum',
    ];

    const shouldRenderFooter = !noFooterRoutes.includes(location.pathname);
    const shouldRenderNavbar = !noNavbarRoutes.includes(location.pathname);
    const shouldRenderImmNavbar = noNavbarRoutes.includes(location.pathname);

    return (
        <div>
            {shouldRenderNavbar && <Navbar />}
            {shouldRenderImmNavbar && <ImmNavbar />}
            <main>
                <Outlet />
            </main>
            {shouldRenderFooter && <Footer />}
        </div>
    );
};

export default Layout;
