import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const handleSetActiveButton = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className='bg-white border-b shadow-md border-imm-main'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className="flex lg:flex-1">
                    <a href="#" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>IMM</span>
                        <span className='font-bold text-2xl'>IMM</span>
                    </a>
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
                <div className='hidden lg:flex lg:gap-x-12'>
                    <NavLink
                        to="/"
                        exact
                        className={`text-sm font-medium leading-6 ${activeButton === 'home' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                        onClick={() => handleSetActiveButton('home')}
                    >
                        Homepage
                    </NavLink>
                    <NavLink
                        to="/bootcamp"
                        className={`text-sm font-medium leading-6 ${activeButton === 'bootcamp' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                        onClick={() => handleSetActiveButton('bootcamp')}
                    >
                        Bootcamp
                    </NavLink>
                    <NavLink
                        to="/imm-welcome"
                        className={`text-sm font-medium leading-6 ${activeButton === 'imm' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                        onClick={() => handleSetActiveButton('imm')}
                    >
                        IMM
                    </NavLink>
                    <NavLink
                        to="/community"
                        className={`text-sm font-medium leading-6 ${activeButton === 'community' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                        onClick={() => handleSetActiveButton('community')}
                    >
                        Community
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={`text-sm font-medium leading-6 ${activeButton === 'profile' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                        onClick={() => handleSetActiveButton('profile')}
                    >
                        Profile
                    </NavLink>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <div className='border-2 rounded-md border-imm-main'>
                        <a href="/login" className="p-4 text-sm font-normal leading-8 text-imm-main">
                            Login
                        </a>
                    </div>

                    <div className='border-2 rounded-md border-imm-main bg-imm-main shadow-lg'>
                        <a href="/register" onClick={() => handleSetActiveButton('register')} className="p-4 text-sm font-normal leading-8 text-white">
                            Register
                        </a>
                    </div>
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
                                    to="/"
                                    exact
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('home')}
                                >
                                    Homepage
                                </NavLink>
                                <NavLink
                                    to="/bootcamp"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('bootcamp')}
                                >
                                    Bootcamp
                                </NavLink>
                                <NavLink
                                    to="/imm-welcome"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('imm')}
                                >
                                    IMM
                                </NavLink>
                                <NavLink
                                    to="/community"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('community')}
                                >
                                    Community
                                </NavLink>
                                <NavLink
                                    to="/profile"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('profile')}
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
