import React from 'react';

export const FormUpdate = () => {
    return (
        <div className='mx-auto max-w-7xl lg:px-8'>
            <div className="flex flex-col">
                <div className="w-full">
                    <h3 className='font-bold pt-8 text-xl mb-5' style={{ fontSize: '32px' }}>Perbarui Laporan Dampak</h3>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3 lg:pr-8">
                        <p className='text-lg font-semibold mb-2' style={{ fontSize: '17px' }}>Buat Laporan</p>
                        <p className='text-s font-semibold mb-2 ml-6'>Pilihlah Tag yang sesuai</p>
                        <div className="bg-white rounded-2xl p-3 outline outline-[#A1A1A1] mb-4 ml-6">
                            <div className="flex space-x-4">
                                {['Tinjauan Triwulanan', 'Pengurangan Emisi'].map((card, index) => (
                                    <div key={index} className="bg-[#2A64F6] text-white rounded-2xl p-3 px-4 flex items-center">
                                        <h4 className="text-s">{card}</h4>
                                        <button className="ml-2 text-white">x</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-2'>Laporan</h4>
                            <div className="relative ml-6 mb-4">
                                <input type="text" className="w-full border rounded-3xl pl-3 pr-10 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Cari nama laporan yang dibuat" />
                                <button className="absolute inset-y-0 right-0 px-6 py-2 , text-gray-600 rounded-r-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
                                    <img src="src/assets/icons/icon-search.svg" alt="Search" className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <div className='bg-[#7198F9] px-6 py-2 rounded-md flex items-center justify-start ml-6 relative mb-4'>
                            <img src="src/assets/icons/icon-report.svg" alt="Search" className="mr-4" />
                            <div className="flex items-center ml-2">
                                <div>
                                    <p className='text-xl font-bold text-white mb-2'>Green Schools Initiative</p>
                                    <p className='text-white font-semibold mb-2'>Rp. 8.130.000.000</p>
                                    <div className="flex items-center text-white">
                                        <img src="src/assets/icons/icon-time.svg" alt="Time" className="w-5 h-5 mr-1" />
                                        <p>Sep 1</p>
                                    </div>
                                </div>
                            </div>
                            <button className="absolute top-4 right-4 focus:outline-none" onClick={() => handleButtonClick()}>
                                <img src="src/assets/icons/icon-close.svg" alt="Close" className="w-4 h-4" />
                            </button>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-2'>Upload Impact</h4>
                            <div className='bg-[#7198F9] p-8 rounded-md flex items-center justify-center flex-col ml-6'>
                                <img src='src/assets/icons/icon-upload.svg' alt="Upload icon" className="mb-2" />
                                <p className='text-white text-center'>Unggah berbagai informasi yang relevan untuk proyek Anda dengan mudah dan cepat</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-3'>Pelaporan Kemajuan Tindak Lanjut</h4>
                            <p className='text-s font-semibold mb-2 ml-3'>Ringkasan Progres Proyek</p>
                            <div className="flex justify-start">
                                {[...Array(5)].map((_, index) => (
                                    <svg key={index} className="w-12 h-12 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '50px'}}>
                                        {index < 2 ? (
                                            <g>
                                                <circle cx="12" cy="12" r="10" stroke="none" fill="#2A64F6" />
                                                <text x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="1px" dy=".3em" fontSize='8'>{index + 1}</text>
                                            </g>
                                        ) : (
                                            <g>
                                                <circle cx="12" cy="12" r="10" strokeWidth="1" className="text-[#2A64F6]" />
                                                <text x="50%" y="50%" textAnchor="middle" stroke="#2A64F6" strokeWidth="1px" dy=".3em" fontSize='8'>{index + 1}</text>
                                            </g>
                                        )}
                                    </svg>
                                ))}
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
                    <div>
                        <h4 className='text-lg font-semibold mb-2'>Pilih Proyek Anda</h4>
                        <div className='mb-2'>
                            <label className='block text-md font-semibold ml-5'>Bilah Kemajuan</label>
                        </div>
                        <div className="flex items-center">
                        <img src="src/assets/images/progress.svg" alt="Progress" className="mx-5 mb-4" />
                        <div>
                            <p className='font-semibold text-justify'>Anda dapat melihat kemajuan proyek Anda saat ini yang tercatat pada progress bar dengan status 40%. Kelola dan prioritaskan proyek sesuai dengan kemajuan dan sasaran Anda untuk efisiensi yang lebih baik.</p>
                        </div>
                        </div>
                    </div>
                            <div className='mb-4 mt-2'>
                                <label className='block text-sm mb-4 font-semibold ml-5'>Pilih kategori SDG dan Metric yang paling relevan dengan proyek Anda</label>
                                <div className="bg-[#7198F9] p-4 rounded-lg ml-10">
                                    <div className="flex flex-col mb-4">
                                    <label className="inline-flex items-center">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked />
                                            <span className="block text-white font-bold ml-2">1. No Poverty</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked/>
                                            <span className="ml-2 text-white">SDG Target 1.1</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked/>
                                            <span className="ml-2 text-white">SDG Target 1.2</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked />
                                            <span className="ml-2 text-white">SDG Target 1.3</span>
                                        </label>
                                    </div>
                                    <div className="flex flex-col">
                                         <label className="inline-flex items-center">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked />
                                            <span className="block text-white font-bold ml-2">2. Zero Hunger</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked />
                                            <span className="ml-2 text-white">SDG Target 2.1</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked/>
                                            <span className="ml-2 text-white">SDG Target 2.2</span>
                                        </label>
                                        <label className="inline-flex items-center ml-5">
                                            <input type="checkbox" name="sdg_target" className="form-radio text-blue-600" checked />
                                            <span className="ml-2 text-white">SDG Target 2.3</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm mb-4 ml-10'>Metric Name</label>
                                <div className="bg-[#7198F9] p-4 rounded-lg ml-10">
                                    <label className='flex items-center mb-2 text-white'>
                                        <input type='checkbox' name='metric_name' className='mr-2' checked /> Client Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2 text-white'>
                                        <input type='checkbox' name='metric_name' className='mr-2' /> Supplier Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2 text-white'>
                                        <input type='checkbox' name='metric_name' className='mr-2' /> Payments to Supplier Individuals: Smallholder
                                    </label>
                                    <label className='flex items-center mb-2 text-white'>
                                        <input type='checkbox' name='metric_name' className='mr-2' checked /> Percent Supplier Payments to Smallholders
                                    </label>
                                    <label className='flex items-center mb-2 text-white'>
                                        <input type='checkbox' name='metric_name' className='mr-2' /> Crop Type
                                    </label>
                                </div>
                            </div>
                            <div className='mb-2'>
                                <label className='block text-sm font-semibold mb-2 mt-6 ml-5'>Detail Dampak SDG pada Proyek</label>
                                <p className="mb-2 ml-10 text-justify">Jelaskan secara rinci bagaimana proyek Anda mendukung SDG yang dipilih</p>
                                <p className="mb-2 ml-10 text-xs font-semibold">Teks Pendek</p>
                                <textarea className="w-full ml-10 mb-2 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                                style={{ 
                                    maxWidth: 'calc(100% - 40px)',
                                }}
                                placeholder="Bagaimana proyek ini secara langsung mendukung SDG yang dipilih?"></textarea>
                                <p className="mb-2 ml-10 text-xs font-semibold">Teks Panjang</p>
                                <textarea className="w-full ml-10 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" 
                                style={{ 
                                    maxWidth: 'calc(100% - 40px)',
                                }}
                                placeholder="Bagaimana proyek ini secaraJelaskan strategi yang telah Anda terapkan untuk mengintegrasikan prinsip SDG dalam proyek ini. langsung mendukung SDG yang dipilih?"></textarea>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold mb-2 ml-5'>Evaluasi Dampak</label>
                                <p className="mb-2 ml-10 text-justify">Sejauh mana elemen-elemen berikut ini terintegrasi dalam proyek Anda?</p>
                                <p className="mb-2 ml-10 text-xs font-semibold">Pilihan</p>
                                <div className='mb-3 ml-10'>
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
                            <div className='mb-4'>
                                <label className='block text-sm font-semibold mb-2 ml-5'>Pendanaan SDG</label>
                                <input 
                                    type='text' 
                                    className='w-full ml-10 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-center' 
                                    style={{ maxWidth: 'calc(100% - 40px)' }}
                                    placeholder='Masukan Nominalnya'
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold pt-2 text-xl mb-5'>Maps</h3>
                    <img src="src/assets/images/maps.svg" alt="maps" style={{width: '100%'}} />
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#2A64F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Simpan dan Lanjutkan</button>
                    </div>
                </div>
                <div style={{ height: '75px' }}></div>
            </div>
    );
};

export default FormUpdate;
