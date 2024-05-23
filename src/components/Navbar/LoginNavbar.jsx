import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const LoginNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const handleSetActiveButton = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className='bg-white border-b shadow-md' style={{ borderColor: '#7198F9' }}>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className="flex items-center">
                    <a href="#" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>IMM Impact Mate</span>
                        <span className='font-bold text-2xl mr-4'>IMM Impact Mate</span>
                    </a>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-4'>
                    <NavLink
                        to="/home"
                    >
                        Homepage
                    </NavLink>
                    <NavLink
                        to="/bootcamp"
                    >
                        Bootcamp
                    </NavLink>
                    <NavLink
                        to="/bootcamp"
                    >
                        IMM
                    </NavLink>
                    <NavLink
                        to="/community"
                    >
                        Community
                    </NavLink>
                    <NavLink
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="src/assets/imm-logo.svg"
                                alt="imm-logo"
                            />
                        </a>
                        <button
                            type='button'
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)} >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavLink
                                    to="/home"
                                >
                                    Homepage
                                </NavLink>
                                <NavLink
                                    to="/bootcamp"
                                >
                                    Bootcamp
                                </NavLink>
                                <NavLink
                                    to="/imm-welcome"
                                >
                                    IMM
                                </NavLink>
                                <NavLink
                                    to="/community"
                                >
                                    Community
                                </NavLink>
                                <NavLink
                                    to="/profile"
                                >
                                    Profile
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    );
};

export default LoginNavbar;