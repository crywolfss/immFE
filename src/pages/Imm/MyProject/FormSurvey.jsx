import React from 'react';

export const FormSurvey = () => {

    return (
        <div className='mx-auto max-w-7xl p-6 lg:px-8'>
            <form>
                <div className="mb-4 mt-16">
                    <label className="block text-md font-bold mb-2">
                        Masukkan Nama Business/Project
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold mb-2">
                        Masukkan Judul Survey
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold mb-2">
                        Masukkan Deskripsi Survey
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold mb-2">
                        Nama Lengkap
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-md font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" />
                </div>
                <div className="mb-16">
                    <label className="block text-md font-bold mb-2">
                        No HP
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                {[1, 2, 3, 4, 5].map((index) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-md text-sm font-bold mb-2">
                            Pertanyaan {index}.
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Ketik Di Sini Pertanyaan Anda"></textarea>
                    </div>
                ))}
                <div className="flex items-center justify-center mt-16 mb-16">
                    <button className="bg-[#2A64F6] hover:bg-[#2A64F6] text-white font-semibold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline" type="button">
                        Simpan dan Bagikan Survey
                    </button>
                </div>
            </form>
        </div>
    );
};