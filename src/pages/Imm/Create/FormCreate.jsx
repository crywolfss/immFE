import React from 'react';

export const FormCreate = () => {
    return (
        <div className='mx-auto max-w-7xl lg:px-8'>
        <div className="flex flex-col">
            <div className="w-full">
                <h3 className='font-bold pt-8 text-xl mb-5' style={{ fontSize: '32px' }}>Buat Projek Baru</h3>
                <p className='text-lg font-semibold mb-2' style={{ fontSize: '17px' }}>Pilih Tag atau Buat yang Baru</p>
                <div className="bg-white rounded-2xl p-3 w-full outline outline-[#A1A1A1] mb-4">
                    <div className="flex space-x-10">
                        {['Environment', 'Education', 'Health'].map((card, index) => (
                            <div key={index} className="bg-[#2A64F6] text-white rounded-2xl p-3 px-4 flex items-center">
                                <h4 className="text-s">{card}</h4>
                                <button className="ml-2 text-white">x</button>
                            </div>
                        ))}
                        <button className="bg-white text-[#2A64F6] border border-[#2A64F6] rounded-2xl px-4 py-2">Pilih Tag</button>
                    </div>
                </div>
            </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 lg:pr-8">
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-3'>Tentang Proyek Anda</h4>
                            <div className='mb-2'>
                                <label className='block text-sm font-semibold mb-2'>Nama Projek</label>
                                <input type='text' className='mt-1 block w-full rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                                style={{ color: '#808080'}}
                                value="Pengurangan Emisi Karbon" />
                            </div>
                            <div className='mb-2'>
                                <label className='block text-sm font-semibold'>Deskripsi Projek</label>
                                <textarea className='mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' rows='2'>
                                    Proyek ini akan memasang solusi energi terbarukan di 100 sekolah di kota dan desa, untuk menyediakan energi berkelanjutan dan edukasi tentang energi hijau.
                                </textarea>
                            </div>
                            <div className='mb-2'>
                                <label className='block text-sm font-semibold'>Tujuan Projek</label>
                                <textarea className='mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' rows='3'>
                                    • "Untuk mengurangi emisi karbon sebesar 50% di sekolah-sekolah yang berpartisipasi dalam waktu tiga tahun."
                                    • "Untuk mendidik lebih dari 50.000 siswa tentang manfaat dan penerapan energi terbarukan."
                                </textarea>
                            </div>
                            <div className='mb-2'>
                                <label className='block text-sm font-semibold mb-2'>Target Pelanggan</label>
                                <div className='flex space-x-4'>
                                <input type='text' className='mt-1 block w-280 rounded-md border-[#808080] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                                style={{ color: '#808080'}}
                                value="Umur" />
                                <select className='mt-1 w-280 rounded-md border-[#808080] bg-[#FFFFFF] text-grey'>
                                        <option>Jenis Pekerjaan</option>
                                    </select>
                            </div>
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-semibold'>Tanggal Mulai Projek</label>
                                <div className='flex space-x-4'>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>01</option>
                                    </select>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>September</option>
                                    </select>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-2'>
                                <label className='text-sm font-semibold'>Tanggal Berakhir Projek</label>
                                <div className='flex space-x-4'>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>01</option>
                                    </select>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>September</option>
                                    </select>
                                    <select className='mt-1 rounded-md border-[#7198F9] bg-[#7198F9] text-white'>
                                        <option>2024</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-2'>Import Data</h4>
                            <div className='bg-[#7198F9] p-8 rounded-md flex items-center justify-center flex-col'>
                                <img src='src/assets/icons/icon-upload.svg' alt="Upload icon" className="mb-2" />
                                <p className='text-white text-center'>Unggah berbagai informasi yang relevan untuk proyek Anda dengan mudah dan cepat</p>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <h4 className='text-lg font-semibold mb-2'>Alamat</h4>
                            <div className='bg-[#7198F9] p-6 rounded-md text-white flex items-center justify-between'>
                                <div>
                                    <p className='ml-2 mb-2'>DKI JAKARTA</p>
                                    <p className='ml-2 mb-2'>KOTA JAKARTA PUSAT</p>
                                    <p className='ml-2 mb-2'>KEMAYORAN</p>
                                    <hr className="my-4 border-t border-white" />
                                <p className='ml-2'>Jl. Benyamin Sueb, RT.13/RW.7, Gn. Sahari Utara, Kecamatan Sawah Besar, Jkt Utara, Daerah Khusus Ibukota Jakarta 10720</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="bg-transparent border-none mb-20">
                                        <img src="src/assets/icons/icon-bahasa.svg" alt="icon" style={{ transform: 'rotate(270deg)' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className='mt-8 lg:mt-0'>
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
                        <div className='mt-'>
                            <h4 className='text-lg font-semibold mb-3'>Pendanaan</h4>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold mb-4'>Jumlah Dana</label>
                                <input type='text' className='mt-1 block w-full rounded-md border-black shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50' value="Rp. 8.130.000.000" />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h4 className='text-lg font-semibold mb-3'>Pendanaan Lainnya</h4>
                            <div className='mb-4'>
                                <label className='block text-sm mb-4'>Jenis Dana</label>
                                <select style={{textAlign: 'center'}} className='mt-1 block w-full rounded-md bg-[#7198F9] border-[#7198F9] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white'>
                                    <option>Hibah</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm mb-4'>Jumlah Dana</label>
                                <input type='text' className='mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-center' value="Rp. 3.252.000.000" />
                            </div>
                            <button style={{textAlign: 'center'}} className='mt-1 block w-full h-10 rounded-md bg-[#7198F9] border-[#7198F9] shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white'>
                                    <label>Klik untuk Pilih SDG, Indicator & Metric</label>
                                </button>
                        </div>
                        <div>
                    <h3 className='font-bold pt-2 text-xl mb-5'>Maps</h3>
                    <img src="src/assets/images/maps_up.svg" alt="maps" style={{width: '100%'}} />
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#2A64F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Simpan dan Lanjutkan</button>
                    </div>
                    </div>
                </div>
                </div>
                <div style={{ height: '75px' }}></div>
            </div>
        </div>
    );
};

export default FormCreate;
