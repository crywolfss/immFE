import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.jsx';
import { Footer } from '../Footer/Footer.jsx';

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

    const shouldRenderFooter = !noFooterRoutes.includes(location.pathname);

    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {shouldRenderFooter && <Footer />}
        </div>
    );
};

export default Layout;
