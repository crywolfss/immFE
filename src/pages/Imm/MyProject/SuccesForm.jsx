import React from 'react';
import { Link } from 'react-router-dom';

export const FormSuccess = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Selamat! Berhasil Membuat Survey
                </h2>
            </div>

            <div className="mt-20 flex flex-col items-center justify-center"> {/* Center the CheckCircleIcon */}
                <img src="src/assets/icons/icon-check-imm.svg" alt="check-icon" />
                <div 
                    className="mb-56 mt-20 flex items-center justify-between"
                    style={{
                        backgroundColor: '#7198F9',
                        color: 'white',
                        width: '709px',
                        height: '50px',
                        borderRadius: '5px',
                        padding: '0 10px' // Add some padding for better spacing
                    }}
                >
                    <span style={{ flex: 1, textAlign: 'left' }}>
                        https://www.formsurvey/user
                    </span>
                    <button
    style={{
        backgroundColor: '#7198F9',
        width: '59px', // Mengatur panjang menjadi 59px
        height: '26px', // Mengatur lebar menjadi 26px
        color: 'white',
        border: '2px solid white', // Mengubah properti border
        cursor: 'pointer',
        borderRadius: '15px', // Menambahkan properti borderRadius
    }}
    onClick={() => {
        navigator.clipboard.writeText('https://www.formsurvey/user');
        alert('Link telah disalin ke clipboard');
    }}
>
    Salin
</button>



                </div>
            </div>
        </div>
    );
};
