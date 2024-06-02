import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bootcamp = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
    });
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 mb-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <h1 className="text-3xl font-semibold mb-4 leading-tight">
                        Sociopreneurship! Belajar<br />
                        <span>Dari <span className="text-[#C6D14A]">Bootcamp</span> Yang  Menyenangkan.</span>
                    </h1>
                    <p className="text-gray-700 mb-6">Selamat datang di Impact Measurement and Management (IMM)! Kembangkan Bisnismu dengan Dampak Positif dan Ikuti IMM. Program Kolaborasi Sociopreneurship dari TBN Indonesia dan Masy Academy.</p>
                    <button className="bg-imm-main text-white py-2 px-4 rounded">Cari Bootcamp Sekarang</button>
                </div>
                <div className="md:w-1/2">
                    <img src="src/assets/Bootcamp/atas.svg" alt="Top Image" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            <div className="mb-8 bg-blue-500 p-8 rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-white text-center">Kelas Yang Diikuti</h2>
    <div className="flex space-x-16 overflow-x-auto pb-4 justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-64 border-2 border-black">
            <img src="src/assets/Bootcamp/kls-yg-diikuti.svg" alt="Sociopreneur" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Sociopreneur</h3>
            <p className="text-s text-[#A6A6A6] font-semibold mt-4">Konsep sociopreneurship dan SDGs</p>
            <button className="text-[#04549D] font-bold mt-10">Materi Course</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-64 border-2 border-black">
            <img src="src/assets/Bootcamp/kls-yg-diikuti.svg" alt="Pitching" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Pitching</h3>
            <p className="text-s text-[#A6A6A6] font-semibold mt-4">How to create successful influencer marketing campaigns</p>
            <button className="text-[#04549D] font-bold mt-4">Materi Course</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 flex-shrink-0 w-64 border-2 border-black">
            <img src="src/assets/Bootcamp/kls-yg-diikuti.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Influence Marketing</h3>
            <p className="text-s text-[#A6A6A6] font-semibold mt-4">How to create successful influencer marketing campaigns</p>
            <button className="text-[#04549D] font-bold mt-4">Materi Course</button>
        </div>
    </div>
    <div className="flex justify-center mt-4 space-x-2">
    <span className="inline-block rounded-full w-9 h-9 flex justify-center items-center border border-white">
        <span className="inline-block bg-white rounded-full w-3 h-3"></span>
    </span>
    <span className="inline-block bg-white rounded-full w-3 h-3 mt-3"></span>
    <span className="inline-block bg-white rounded-full w-3 h-3 mt-3"></span>
    <span className="inline-block bg-white rounded-full w-3 h-3 mt-3"></span>
    </div>
    <div className="text-right mt-4">
        <a href="#" className="text-white font-semibold">Lihat Kelas Yang Diikuti →</a>
    </div>
</div>

    <div>
    <div>
    <h2 className='font-bold pt-10 text-xl'>
        <span className='border-l border-2 mr-2 border-imm-secondary'></span>
        Pilihan Bootcamp
    </h2>
    <p className="mb-4 ml-3">Ayo bangun Bisnismu, mulai dari sini!</p>
</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/influence-marketing.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Influence Marketing</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(112)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/Desirability.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4 text-center">Desirability</h3>
                        <p className="text-gray-700 text-center">How To Create Successful Influencer Marketing Campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(22)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/Pitching.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Pitching</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(212)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/Metrics-Ecosystem.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Metrics Ecosystem</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(132)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/ViabilityStudies.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Viability Studies</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(12)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/BusinessModel.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Business Model</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(42)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/Feasibilitystudies.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Feasibility Studies</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(32)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                        <img src="src/assets/Bootcamp/MarketFit.svg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Market Fit</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-left">
                            <span className="text-[#979797] font-semibold">Rp 450.000</span>
                            <div className="flex items-center mt-1">
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 1l2.93 6.41L19 7.5l-5.29 5.09L15.5 19 10 15.58 4.5 19l1.79-6.41L1 7.5l5.07-.09L10 1z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-700 ml-2">(22)</span>
                            </div>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded-lg">Beli Sekarang</button>
                    </div>
                </div>
            </div>

            <div>
            <h2 className='font-bold pt-10 text-xl'>
        <span className='border-l border-2 mr-2 border-imm-secondary'></span>
        Rekomendasi Kelas
    </h2>
    <p className="mb-4 ml-3">Rekomendasi Kelas Terbaik, Ayo dipilih!</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Influence Marketing', 'Desirability', 'Pitching', 'Metrics Ecosystem', 'Viability Studies', 'Business Model', 'Feasibility Studies', 'Market Fit'].map(course => (
            <button key={course} className="bg-white shadow-lg rounded-lg p-4 font-semibold border-2 border-[#2A64F6] hover:bg-[#2A64F6] hover:text-white font-semibold transition duration-300">{course}</button>
        ))}
    </div>
</div>

<div className="mt-8">
    <h2 className='font-bold pt-10 text-xl'>
        <span className='border-l border-2 mr-2 border-imm-secondary'></span>
        Perpustakaan
    </h2>
    <p className="mb-4 ml-3">Buku dan catatan digital, Cari Di sini!</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
        { title: 'Business', img: 'src/assets/Bootcamp/perpustakaan/busines.svg' },
        { title: 'Project Proposal', img: 'src/assets/Bootcamp/perpustakaan/project_proposal.svg' },
        { title: 'Investing', img: 'src/assets/Bootcamp/perpustakaan/investing.svg' },
        { title: 'Chemistry', img: 'src/assets/Bootcamp/perpustakaan/chemistry.svg' },
        { title: 'Chemistry', img: 'src/assets/Bootcamp/perpustakaan/chemistry.svg' },
        { title: 'Chemistry', img: 'src/assets/Bootcamp/perpustakaan/yo.svg' },
        { title: 'Learn English', img: 'src/assets/Bootcamp/perpustakaan/learn_english.svg' },
        { title: 'General English', img: 'src/assets/Bootcamp/perpustakaan/general_english.svg' },
    ].map(book => (
        <div key={book.title} className="bg-[#D6DFF6] p-6">
            <img src={book.img} alt={book.title} className="w-full h-80 object-cover rounded-lg" />
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <button className="bg-[#D6DFF6] border border-black text-white py-2 px-4 w-auto rounded-lg">
                    <img src="src/assets/images/download.svg" alt="Download" className="mx-auto" />
                </button>
            </div>
        </div>
    ))}
</div>
<div className="flex justify-center mt-12 mb-12">
                    <button className="bg-white border border-[#0F1F3E] text-[#0F1F3E] py-2 px-6 rounded">
                        CARI BUKU
                    </button>
                </div>

</div>


<div className="w-full min-h-screen bg-[#D6DFF6] flex flex-col">
            <div className="p-4 flex flex-col flex-grow">
                <h2 className='font-bold pt-6 text-xl'>
                    <span className='border-l border-2 mr-2 border-imm-secondary'></span>
                    Laporan
                </h2>
                <p className="mb-4 ml-3">Susun template pembuatan laporan!</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-grow">
                    {['Laporan Dampak', 'Laporan Project IMM', 'Laporan Perhitungan', 'Laporan Grant'].map((report, index) => {
                        const imageNames = [
                            'laporan-dampak.svg',
                            'laporan-project-imm.svg',
                            'laporan-perhitungan.svg',
                            'laporan-grant.svg'
                        ];

                        return (
                            <div key={report} className="bg-white p-4 rounded-lg shadow-lg">
                                <img 
                                    src={`src/assets/Reports/${imageNames[index]}`} 
                                    alt={report} 
                                    className="w-full h-80 object-cover rounded-lg" 
                                />
                                <h3 className="text-lg font-bold mt-4">{report}</h3>
                                <button className="bg-[#D6DFF6] border border-black text-black py-2 px-4 w-auto rounded-lg mt-4 ml-48">
                                    <img src="src/assets/images/download.svg" alt="Download" className="mx-auto" />
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-12 mb-8">
                    <button className="bg-[#D6DFF6] border border-[#0F1F3E] text-[#0F1F3E] py-2 px-6 rounded">
                        CARI TEMPLATE
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Bootcamp;