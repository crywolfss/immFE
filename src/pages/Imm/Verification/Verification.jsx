import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Verification = () => {
    const [email, setEmail] = useState('');
    const [no_hp, setNo_Hp] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNo_HpChange = (e) => setNo_Hp(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/otp', {
                email: email,
                no_hp: no_hp,
            });

            if (response.data.success) {
                // Navigate to the OTP verification page
                navigate('/imm-otp', { state: { email, no_hp }});
            } else {
                setError(response.data.message || 'Verification failed');
            }
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Verifikasikan diri anda
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Masukan E-Mail
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="no_hp" className="block text-sm font-medium leading-6 text-gray-900">
                                Masukan Nomor Telepon
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="no_hp"
                                name="no_hp"
                                type="no_hp"
                                autoComplete="current-no_hp"
                                required
                                value={no_hp}
                                onChange={handleNo_HpChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm">
                            {error}
                        </div>
                    )}
                    <div>
                    <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-imm-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7198F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Verifikasi
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}
