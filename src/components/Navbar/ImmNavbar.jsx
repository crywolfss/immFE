import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const ImmNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    const [companyName, setCompanyName] = useState('');

    useEffect(() => {
        const fetchCompanyName = async () => {
            const token = localStorage.getItem('token'); // Assuming the token is stored in local storage with key 'token'
            const userId = localStorage.getItem('id');
            if (!token) {
                console.error('Token not found');
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/api/company', { // Assuming the endpoint is specific to the user
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch company name');
                }
                const data = await response.json();
                console.log(data.user_id);
                // Filter the data based on the user ID
                const userCompanies = data.filter(company => company.user_id === parseInt(userId));
                console.log(userCompanies);
                if (userCompanies.length > 0) {
                    // You can concatenate the company names if there are multiple companies
                    const companyNames = userCompanies.map(company => company.nama_perusahaan).join(', ');
                    setCompanyName(companyNames);
                } else {
                    console.error('No company found for the user');
                }

            } catch (error) {
                console.error('Error fetching company name:', error);
            }
        };

        fetchCompanyName();
    }, []);

    const handleSetActiveButton = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className='bg-white border-b shadow-md border-imm-main'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className="flex lg:flex-1 items-center">
                    <a href="#" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>IMM</span>
                        <span className='font-bold text-2xl mr-4'>IMM</span>
                    </a>
                    <div className='hidden lg:flex lg:flex-1 lg:justify-start gap-4 ml-6'>
                        <NavLink
                            to="/imm-home"
                            className={`text-sm font-medium leading-6 ${activeButton === 'home' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('home')}
                        >
                            Homepage
                        </NavLink>
                        <NavLink
                            to="/imm-myproject"
                            className={`text-sm font-medium leading-6 ${activeButton === 'myproject' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('myproject')}
                        >
                            MyProject
                        </NavLink>
                        <NavLink
                            to="/imm-create"
                            className={`text-sm font-medium leading-6 ${activeButton === 'create' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('create')}
                        >
                            Create
                        </NavLink>
                        <NavLink
                            to="/imm-status"
                            className={`text-sm font-medium leading-6 ${activeButton === 'status' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('status')}
                        >
                            Status
                        </NavLink>
                        <NavLink
                            to="/forum"
                            className={`text-sm font-medium leading-6 ${activeButton === 'forum' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('forum')}
                        >
                            Forum
                        </NavLink>
                        <NavLink
                            to="/imm-profile"
                            className={`text-sm font-medium leading-6 ${activeButton === 'profile' ? 'bg-imm-main text-white rounded-md px-4 py-2' : 'text-gray-900'} inline-flex items-center h-10`}
                            onClick={() => handleSetActiveButton('profile')}
                        >
                            Profile
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src="src/assets/icons/icon-notification.svg" alt="notification" className="h-10 w-10 mr-4" />
                    <div className="h-10 w-10 bg-gray-100 rounded-full float-right mr-3">
                        <img src="src/assets/persons/person-1.jpg" alt="Profile" className="h-full w-full rounded-full object-cover" />
                    </div>
                    <span className="text-black font-semibold mr-4">{companyName}</span>
                    <img src="src/assets/icons/icon-down.svg" alt="dropdown" className="h-4 w-4 ml-auto" />
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
                                    to="/imm-home"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('home')}
                                >
                                    Homepage
                                </NavLink>
                                <NavLink
                                    to="/imm-myproject"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('myproject')}
                                >
                                    MyProject
                                </NavLink>
                                <NavLink
                                    to="/imm-create"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('create')}
                                >
                                    Create
                                </NavLink>
                                <NavLink
                                    to="/imm-status"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('status')}
                                >
                                    Status
                                </NavLink>
                                <NavLink
                                    to="/forum"
                                    className="-mx-3 block rounded-md px-4 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => handleSetActiveButton('forum')}
                                >
                                    Forum
                                </NavLink>
                                <NavLink
                                    to="/imm-profile"
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

export default ImmNavbar;
