import React from 'react';

export const FormCreate = () => {
    return (
        <div className='mx-auto max-w-7xl lg:px-8'>
            <div className="flex flex-col">
                <div className="w-full">
                    <h3 className='font-bold pt-8 text-xl mb-6' style={{ fontSize: '24px' }}>Buat Projek Baru</h3>
                    <div className="bg-white rounded-lg p-4 w-full outline mb-8">
                        <p className='text-lg font-semibold mb-6'>Pilih Tag atau Buat yang Baru</p>
                        <div className="flex space-x-4 mb-8">
                            {['Environment', 'Education', 'Health'].map((card, index) => (
                                <div key={index} className="bg-[#2A64F6] text-white rounded-lg p-4 flex items-center">
                                    <h4 className="text-lg font-bold">{card}</h4>
                                    <button className="ml-2 text-white font-bold">x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 lg:pr-8">
                        <div className='mb-8'>
                            <h4 className='text-lg font-semibold'>Tentang Proyek Anda</h4>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Nama Projek</label>
                                <input type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' value="Pengurangan Emisi Karbon" />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Deskripsi Projek</label>
                                <textarea className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' rows='3'>
                                    Proyek ini akan memasang solusi energi terbarukan di 100 sekolah di kota dan desa, untuk menyediakan energi berkelanjutan dan edukasi tentang energi hijau.
                                </textarea>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Tujuan Projek</label>
                                <textarea className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' rows='3'>
                                    • "Untuk mengurangi emisi karbon sebesar 50% di sekolah-sekolah yang berpartisipasi dalam waktu tiga tahun."
                                    • "Untuk mendidik lebih dari 50.000 siswa tentang manfaat dan penerapan energi terbarukan."
                                </textarea>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Tanggal Mulai Projek</label>
                                <div className='flex space-x-2'>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>01</option>
                                    </select>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>September</option>
                                    </select>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Tanggal Berakhir Projek</label>
                                <div className='flex space-x-2'>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>01</option>
                                    </select>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>September</option>
                                    </select>
                                    <select className='mt-1 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-200 text-blue-900'>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <h4 className='text-lg font-semibold'>Import Data</h4>
                            <div className='bg-blue-200 p-4 rounded-lg flex items-center justify-center'>
                                <p className='text-blue-700 text-center'>Unggah berbagai informasi yang relevan untuk proyek Anda dengan mudah dan cepat</p>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <h4 className='text-lg font-semibold'>Alamat</h4>
                            <div className='bg-blue-100 p-4 rounded-lg'>
                                <p>DKI JAKARTA</p>
                                <p>KOTA JAKARTA PUSAT</p>
                                <p>KEMAYORAN</p>
                                <p>Jl. Benyamin Sueb, RT.13/RW.7, Gn. Sahari Utara, Kecamatan Sawah Besar, Jkt Utara, Daerah Khusus Ibukota Jakarta 10720</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className='mt-8 lg:mt-0'>
                            <h4 className='text-lg font-semibold'>Kategori Bisnis</h4>
                            <div className='mb-4'>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' checked /> Bisnis Baru
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' /> Bisnis yang sudah ada
                                </label>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h4 className='text-lg font-semibold'>Pendanaan</h4>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Jumlah Dana</label>
                                <input type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' value="Rp. 8.130.000.000" />
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h4 className='text-lg font-semibold'>Pendanaan Lainnya</h4>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Jenis Dana</label>
                                <select className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'>
                                    <option>Hibah</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Jumlah Dana</label>
                                <input type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' value="Rp. 3.252.000.000" />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Kategori SDGs</label>
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <div className="flex flex-col mb-4">
                                        <label className="block text-gray-700 font-bold mb-2">1. No Poverty</label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 1.1</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 1.2</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 1.3</span>
                                        </label>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="block text-gray-700 font-bold mb-2">2. Zero Hunger</label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 2.1</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 2.2</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="sdg_target" className="form-radio text-blue-600" />
                                            <span className="ml-2">SDG Target 2.3</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Metric Name</label>
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <label className='flex items-center mb-2'>
                                        <input type='radio' name='metric_name' className='mr-2' /> Client Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2'>
                                        <input type='radio' name='metric_name' className='mr-2' /> Supplier Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2'>
                                        <input type='radio' name='metric_name' className='mr-2' /> Payments to Supplier Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2'>
                                        <input type='radio' name='metric_name' className='mr-2' /> Percent Supplier Payments to Smallholders
                                    </label>
                                    <label className='flex items-center mb-2'>
                                        <input type='radio' name='metric_name' className='mr-2' /> Crop Type
                                    </label>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold text-gray-700'>Tag Tema Dampak Yang Selaras dengan Prioritas Dampak Anda</label>
                                <div className='border-2 border-black rounded-lg p-4'>
                                    <div className='flex flex-wrap space-x-2'>
                                        <div className='bg-blue-200 text-blue-800 font-bold rounded-full px-4 py-1 mb-2 flex items-center'>
                                            <span>Pekerjaan</span>
                                            <button className="ml-2 text-blue-800 font-bold">x</button>
                                        </div>
                                        <div className='bg-blue-200 text-blue-800 font-bold rounded-full px-4 py-1 mb-2 flex items-center'>
                                            <span>infrastruktur</span>
                                            <button className="ml-2 text-blue-800 font-bold">x</button>
                                        </div>
                                        <div className='bg-blue-200 text-blue-800 font-bold rounded-full px-4 py-1 mb-2 flex items-center'>
                                            <span>Pendidikan</span>
                                            <button className="ml-2 text-blue-800 font-bold">x</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCreate;
