import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeImm = () => {
    return (
        <div className='flex h-screen bg-[#7198F9] items-center'>
            <div className='w-1/2 h-full flex justify-center'>
                <div className='hidden lg:flex  justify-center items-center'>
                    <img src="src/assets/images/puzzle.png" className='h-96 w-96' alt="" />
                </div>
            </div>
            <div className='w-1/2 flex flex-col ps-10 gap-20 bg-white h-full justify-center'>
                <h2 className='font-bold text-2xl '>Welcome To IMM</h2>
                <Link to='/imm-verification'
                    
                    className="flex w-1/2 justify-center rounded-md bg-imm-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7198F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Mulai Sekarang
                </Link>
            </div>
        </div>
    );
};
