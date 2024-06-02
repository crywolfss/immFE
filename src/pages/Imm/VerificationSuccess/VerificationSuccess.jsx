import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export const VerificationSuccess = () => {
    const navigate = useNavigate();
    const [secondsRemaining, setSecondsRemaining] = useState(5);
    const location = useLocation();
    const { email, no_hp } = location.state || {};
    const apiUrl = 'http://127.0.0.1:8000/api/company';

    useEffect(() => {
        const countdown = () => {
            for (let i = secondsRemaining; i >= 0; i--) {
                setTimeout(() => {
                    setSecondsRemaining(i);
                    if (i === 0) {
                        const fetchPhoneNumber = async () => {
                            try {
                                const response = await axios.get(apiUrl);
                                const companies = response.data;
                                console.log('Companies:', companies);
                                console.log('no_hp:', no_hp);

                                const matchedCompany = companies.find(
                                    (company) => {
                                        console.log('Company:', company);
                                        console.log('Company nomer_telepon:', company.nomor_telepon);
                                        return company.nomor_telepon === no_hp;
                                    }
                                );

                                console.log('Matched Company:', matchedCompany);
                                if (matchedCompany) {
                                    navigate('/imm-home', { state: { company: matchedCompany } });
                                } else {
                                    navigate('/imm-registration-form', { state: { email, no_hp } });
                                }
                            } catch (error) {
                                console.error('Error fetching data:', error);
                            }
                        };

                        fetchPhoneNumber();
                    }
                }, (secondsRemaining - i) * 1000);
            }
        };

        countdown();
    }, [no_hp, navigate, secondsRemaining, apiUrl]); // Dependency array to ensure effect runs only once

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Selamat! berhasil verifikasi akun
                </h2>
            </div>

            <div className="mt-10 flex items-center justify-center"> {/* Center the CheckCircleIcon */}
                <img src="src/assets/icons/icon-check-imm.svg" alt="check-icon" />
            </div>

            <p className="mt-20 text-center text-lg font-normal leading-9 tracking-tight text-gray-900">
                Anda akan dialihkan ke halaman selanjutnya dalam {secondsRemaining} detik.
            </p>

            <a href='#' className="mt-4 text-center text-sm font-semibold leading-9 tracking-tight text-[#0F1F3E] hover:text-[#7198F9]">
                <Link to='/imm-registration-form'>
                    Klik disini jika bermasalah
                </Link>
            </a>
        </div>
    );
};
