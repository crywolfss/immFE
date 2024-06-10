import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ImmProfile = () => {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            if (!token) {
                console.error('Token not found');
                return;
            }

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/user-id/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                if (data.length > 0) {
                    setNamaLengkap(data[0].nama_lengkap);
                    setEmail(data[0].email);
                } else {
                    console.error('User data not found');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchCompanyName = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            if (!token) {
                console.error('Token not found');
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/api/company', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch company name');
                }
                const data = await response.json();
                const userCompanies = data.filter(company => company.user_id === parseInt(userId));
                if (userCompanies.length > 0) {
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

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        navigate("/login");
    };

    return (
        <div className='mx-auto max-w-7xl items-center lg:px-8'>
            <div>
                <h3 className='font-bold pt-10 text-xl'>Your Profile</h3>
                <div className="mt-6">
                    <div className="bg-white shadow-xl p-6 border border-gray-200" style={{ minHeight: '400px' }}>
                        <div className="flex items-center">
                            <span className="text-xl font-semibold mr-4 mb-20">Basic Details</span>
                            <div className="h-20 w-20 bg-gray-200 rounded-full float-right mb-8 ml-6">
                                <img src="src/assets/persons/person-1.jpg" alt="Profile" className="h-full w-full rounded-full object-cover" />
                            </div>
                            <span className="text-m ml-4 mb-6 float-right">Change Picture</span>
                        </div>
                        <div className="flex ml-44 mb-2 mt-4">
                            <div className="w-full mr-2">
                                <span className="text-sm font-semibold">Full Name</span>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full mt-1"
                                    placeholder="Your Full Name"
                                    value={namaLengkap}
                                    onChange={(e) => setNamaLengkap(e.target.value)}
                                    style={{ width: 'calc(100% + 0.5rem)' }}
                                />
                            </div>
                        </div>
                        <div className="flex ml-44 mb-2 mt-4">
                            <div className="w-full mr-2">
                                <span className="text-sm font-semibold">Email</span>
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full mt-1"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ width: 'calc(100% + 0.5rem)' }}
                                />
                            </div>
                        </div>
                        <div className="flex ml-44 mb-2 mt-4">
                            <div className="w-full mr-2">
                                <span className="text-sm font-semibold">Company Name</span>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md px-4 py-2 w-full mt-1"
                                    placeholder="Your Company Name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    style={{ width: 'calc(100% + 0.5rem)' }}
                                />
                            </div>
                        </div>
                        <div className="flex ml-44 mb-2 mt-4">
                            <div className="w-full mr-2">
                                <span className="text-sm font-semibold">Password</span>
                                <input type="password" className="border border-gray-300 rounded-md px-4 py-2 w-full mt-1" placeholder="Your Password" style={{ width: 'calc(100% + 0.5rem)' }} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0F1F3E] rounded-lg mt-4 p-4 flex justify-between items-center">
                        <p className="text-white text-lg min-w-max max-w-full">General preferences for the web</p>
                        <div className="flex justify-end items-center w-full">
                            <div className="flex items-center">
                                <img src="src/assets/icons/icon-languange.svg" alt="Languange" className="h-6 w-6 mr-2" />
                            <p className="text-white text-lg mr-8">Language</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white text-lg mr-2">Bahasa Indonesia</p>
                                <img src="src/assets/icons/icon-bahasa.svg" alt="Bahasa" className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg mt-4 p-2 border border-black flex items-center" style={{ maxWidth: '100px' }}>
                        <p className="text-black text-lg font-semibold mr-2">Exit</p>
                        <img onClick={handleLogout} src="src/assets/icons/icon-exit.svg" alt="Exit" className="h-6 w-6 ml-4" />
                    </div>
                </div>
            </div>
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default ImmProfile;
