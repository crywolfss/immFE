import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom'

export const VerificationSuccess = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Selamat! berhasil verifikasi akun
                </h2>
            </div>

            <div className="mt-10 flex items-center justify-center"> {/* Center the CheckCircleIcon */}
                {/* <CheckCircleIcon className='w-1/6' />  */}
                <img src="src/assets/icons/icon-check-imm.svg" alt="check-icon" />
            </div>

            <p className="mt-20 text-center text-lg font-normal leading-9 tracking-tight text-gray-900">
                Anda akan dialihkan ke halaman selanjutnya
            </p>

            <a href='#' className="mt-4 text-center text-sm font-semibold leading-9 tracking-tight text-[#0F1F3E] hover:text-[#7198F9]">
            <Link to = '/imm-registration-form'>
                Klik disini jika bermasalah
                </Link>    
            </a>
        </div>
    );
};
