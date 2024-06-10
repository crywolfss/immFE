import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const FormUpdate = () => {
    const [showUpdateTagButton, setShowUpdateTagButton] = useState(false);
    const [showUpdateSDGButton, setShowUpdateSDGButton] = useState(false);

    const handleUpdateReport = () => {
        setShowUpdateTagButton(true);
        setShowUpdateSDGButton(true);
    };

    return (
        <div className='mx-auto max-w-7xl lg:px-8'>
            <div className="flex flex-col">
                <div className="w-full">
                    <h3 className='font-bold pt-8 text-xl mb-5' style={{ fontSize: '32px' }}>Perbarui Laporan Dampak</h3>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 lg:pr-8">
                        <p className='text-lg font-semibold mb-2' style={{ fontSize: '17px' }}>Perbarui Laporan</p>
                        <div className="mb-4 ml-6">
                            <label htmlFor="tag-dropdown" className="block text-md font-semibold mb-2">Pilihlah Tag yang sesuai</label>
                            <select id="tag-dropdown" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                            <option value="" disabled>Pilih Tag</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-2'>Upload Impact</h4>
                            <div className='bg-[#7198F9] p-8 rounded-md flex items-center justify-center flex-col ml-6'>
                                <img src='src/assets/icons/icon-upload.svg' alt="Upload icon" className="mb-2" />
                                <p className='text-white text-center'>Unggah berbagai informasi yang relevan untuk proyek Anda dengan mudah dan cepat</p>
                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0 ml-3'>
                            <h4 className='text-lg font-semibold mb-2'>Kategori Bisnis</h4>
                            <div className='mb-3'>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' checked /> Bisnis Baru
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' /> Bisnis yang sudah ada
                                </label>
                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0 ml-3'>
                            <h4 className='text-lg font-semibold mb-2'>Pilih Proyek Anda</h4>
                            <div className='mb-2'>
                                <label className='block text-md font-semibold ml-5'>Bilah Kemajuan</label>
                            </div>
                            <div className="flex items-center">
                                <img src="src/assets/images/progress.svg" alt="Progress" className="h-16 w-16" />
                                <div className="ml-5">
                                    <p className='font-semibold text-justify'>Anda dapat melihat kemajuan proyek Anda saat ini yang tercatat pada progress bar dengan status 40%. Kelola dan prioritaskan proyek sesuai dengan kemajuan dan sasaran Anda untuk efisiensi yang lebih baik.</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h4 className='text-lg font-semibold mb-2'>Alamat</h4>
                                <div className='bg-[#7198F9] p-6 rounded-md text-white' style={{ maxWidth: '750px' }}>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Negara</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                            <option value="" disabled>Pilih Negara</option>
                                            {/* Add your country options here */}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Provinsi</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                            <option value="" disabled>Pilih Provinsi</option>
                                            {/* Add your province options here */}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Kota</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                            <option value="" disabled>Pilih Kota</option>
                                            {/* Add your city options here */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className='mb-4 mt-2'>
                            <label className='block text-sm mb-4 ml-5'>Kategori SDGs, Indicators dan Metrics</label>
                            <div className="bg-white rounded-2xl p-3 outline outline-[#A1A1A1] mb-4 ml-6">
                                <div className="mb-4">
                                    <label className="block text-md font-semibold mb-2">SDG</label>
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                        <option value="" disabled>Pilih SDG</option>
                                        {/* Add your SDG options here */}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-md font-semibold mb-2">Indicator</label>
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                        <option value="" disabled>Pilih Indicator</option>
                                        {/* Add your Indicator options here */}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-md font-semibold mb-2">Metric</label>
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
                                        <option value="" disabled>Pilih Metric</option>
                                        {/* Add your Metric options here */}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label className='block text-sm font-semibold mb-2 mt-6 ml-5'>Pengukuran Metrics</label>
                            <input
                                type='text'
                                className='w-full ml-5 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-center'
                                style={{ maxWidth: 'calc(100% - 40px)' }}
                                placeholder='Masukan nilai metrics'
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='block text-sm font-semibold mb-2 mt-6 ml-5'>Detail Dampak SDG pada Proyek</label>
                            <p className="mb-2 ml-5 text-justify">Jelaskan secara rinci bagaimana proyek Anda mendukung SDG yang dipilih</p>
                            <p className="mb-2 ml-5 text-xs font-semibold">Teks Pendek</p>
                            <textarea className="w-full ml-5 mb-2 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                style={{
                                    maxWidth: 'calc(100% - 40px)',
                                }}
                                placeholder="Bagaimana proyek ini secara langsung mendukung SDG yang dipilih?"></textarea>
                            <p className="mb-2 ml-5 text-xs font-semibold">Teks Panjang</p>
                            <textarea className="w-full ml-5 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                style={{
                                    maxWidth: 'calc(100% - 40px)',
                                }}
                                placeholder="Jelaskan strategi yang telah Anda terapkan untuk mengintegrasikan prinsip SDG dalam proyek ini."></textarea>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-semibold mb-2 ml-5'>Evaluasi Dampak</label>
                            <p className="mb-2 ml-5 text-justify">Sejauh mana elemen-elemen berikut ini terintegrasi dalam proyek Anda?</p>
                            <p className="mb-2 ml-5 text-xs font-semibold">Pilihan</p>
                            <div className='mb-3 ml-5'>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' /> Sama sekali tidak terintegrasi
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' /> Terintegrasi secara minimal
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' checked /> Cukup terintegrasi
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' /> Sangat terintegrasi
                                </label>
                                <p className="mb-2 mt-2 text-xs font-semibold">Elemen</p>
                                <div className='mb-3'>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' /> Keterlibatan komunitas lokal
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' checked /> Pemanfaatan sumber daya berkelanjutan
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' checked /> Dampak sosial positif
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' /> Keterlibatan pemangku kepentingan
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-semibold mb-2 ml-5'>Pendanaan SDG</label>
                            <input
                                type='text'
                                className='w-full ml-5 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-center'
                                style={{ maxWidth: 'calc(100% - 40px)' }}
                                placeholder='Masukan Nominalnya'
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold pt-2 text-xl mb-5'>Maps</h3>
                    <img src="src/assets/images/maps.svg" alt="maps" style={{ width: '100%' }} />
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#2A64F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl" onClick={handleUpdateReport}>Perbarui Laporan</button>
                    </div>
                    <Link to="/imm-create">
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#2A64F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Simpan dan Lanjutkan</button>
                    </div>   
                    </Link>

                </div>
                <div style={{ height: '75px' }}></div>
            </div>
        </div>
    );
};

export default FormUpdate;
