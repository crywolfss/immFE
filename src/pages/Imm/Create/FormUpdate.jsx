import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export const FormUpdate = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const [tag, setTag] = useState(null);
    const [country, setCountry] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);
    const [sdg, setSDG] = useState(null);
    const [indicator, setIndicator] = useState(null);
    const [metric, setMetric] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        const fetchDropdownData = async () => {
            try {
                if (project) {
                    const tagResponse = await axios.get(`http://127.0.0.1:8000/api/get-tag-id/${project.tag_id}`);
                    const countryResponse = await axios.get(`http://127.0.0.1:8000/api/get-country-id/${project.negara_id}`);
                    const regionResponse = await axios.get(`http://127.0.0.1:8000/api/get-region-id/${project.provinsi_id}`);
                    const cityResponse = await axios.get(`http://127.0.0.1:8000/api/get-citys-id/${project.kota_id}`);
                    const sdgResponse = await axios.get(`http://127.0.0.1:8000/api/get-sdg-id/${project.sdg_id}`);
                    const indicatorResponse = await axios.get(`http://127.0.0.1:8000/api/get-indicator-id/${project.indikator_id}`);
                    const metricResponse = await axios.get(`http://127.0.0.1:8000/api/get-metric-id/${project.matrik_id}`);

                    setTag(tagResponse.data);
                    setCountry(countryResponse.data);
                    setRegion(regionResponse.data);
                    setCity(cityResponse.data);
                    setSDG(sdgResponse.data);
                    setIndicator(indicatorResponse.data);
                    setMetric(metricResponse.data);
                }
            } catch (error) {
                console.error('Error fetching dropdown data:', error);
            }
        };

        fetchProject();
        fetchDropdownData();
    }, [id, project]);

    if (loading || !project || !tag || !country || !region || !city || !sdg || !indicator || !metric) {
        return <div>Loading...</div>;
    }

    const handleUpdateReport = () => {
        // Your logic for updating the report
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
                            <select id="tag-dropdown" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                <option value={project.tag_id}>{tag}</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <h4 className='text-lg font-semibold mb-2'>Upload Impact</h4>
                            <div className='bg-[#7198F9] p-8 rounded-md flex items-center justify-center flex-col ml-6'>
                                <img src='/src/assets/icons/icon-upload.svg' alt="Upload icon" className="mb-2" />
                                <p className='text-white text-center'>Unggah berbagai informasi yang relevan untuk proyek Anda dengan mudah dan cepat</p>
                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0 ml-3'>
                            <h4 className='text-lg font-semibold mb-2'>Kategori Bisnis</h4>
                            <div className='mb-3'>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' checked={project.kategori === 'Bisnis Baru'} readOnly /> Bisnis Baru
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='kategori_bisnis' className='mr-2' checked={project.kategori === 'Bisnis yang sudah ada'} readOnly /> Bisnis yang sudah ada
                                </label>
                            </div>
                        </div>
                        <div className='mt-8 lg:mt-0 ml-3'>
                            <h4 className='text-lg font-semibold mb-2'>Pilih Proyek Anda</h4>
                            <div className='mb-2'>
                                <label className='block text-md font-semibold ml-5'>Bilah Kemajuan</label>
                            </div>
                            <div className="flex items-center">
                                <img src="/src/assets/images/progress.svg" alt="Progress" className="h-16 w-16" />
                                <div className="ml-5">
                                    <p className='font-semibold text-justify'>Anda dapat melihat kemajuan proyek Anda saat ini yang tercatat pada progress bar dengan status 40%. Kelola dan prioritaskan proyek sesuai dengan kemajuan dan sasaran Anda untuk efisiensi yang lebih baik.</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h4 className='text-lg font-semibold mb-2'>Alamat</h4>
                                <div className='bg-[#7198F9] p-6 rounded-md text-white' style={{ maxWidth: '750px' }}>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Negara</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                            <option value={project.negara_id}>{country}</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Provinsi</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                            <option value={project.provinsi_id}>{region}</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-md font-semibold mb-2">Kota</label>
                                        <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                            <option value={project.kota_id}>{city}</option>
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
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                        <option value={project.sdg_id}>{sdg}</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-md font-semibold mb-2">Indicator</label>
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                        <option value={project.indikator_id}>{indicator}</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-md font-semibold mb-2">Metric</label>
                                    <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" disabled>
                                        <option value={project.matrik_id}>{metric}</option>
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
                                value={project.dana}
                                readOnly
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
                                placeholder="Bagaimana proyek ini secara langsung mendukung SDG yang dipilih?"
                                value={project.deskripsi}
                                readOnly
                            ></textarea>
                            <p className="mb-2 ml-5 text-xs font-semibold">Teks Panjang</p>
                            <textarea className="w-full ml-5 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                                style={{
                                    maxWidth: 'calc(100% - 40px)',
                                }}
                                placeholder="Jelaskan strategi yang telah Anda terapkan untuk mengintegrasikan prinsip SDG dalam proyek ini."
                                value={project.tujuan}
                                readOnly
                            ></textarea>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-semibold mb-2 ml-5'>Evaluasi Dampak</label>
                            <p className="mb-2 ml-5 text-justify">Sejauh mana elemen-elemen berikut ini terintegrasi dalam proyek Anda?</p>
                            <p className="mb-2 ml-5 text-xs font-semibold">Pilihan</p>
                            <div className='mb-3 ml-5'>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' disabled /> Sama sekali tidak terintegrasi
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' disabled /> Terintegrasi secara minimal
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' checked={true} disabled /> Cukup terintegrasi
                                </label>
                                <label className='flex items-center'>
                                    <input type='radio' name='pilihan' className='mr-2' disabled /> Sangat terintegrasi
                                </label>
                                <p className="mb-2 mt-2 text-xs font-semibold">Elemen</p>
                                <div className='mb-3'>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' disabled /> Keterlibatan komunitas lokal
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' checked={true} disabled /> Pemanfaatan sumber daya berkelanjutan
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' checked={true} disabled /> Dampak sosial positif
                                    </label>
                                    <label className='flex items-center'>
                                        <input type='checkbox' name='elemen' className='mr-2' disabled /> Keterlibatan pemangku kepentingan
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
                                value={project.dana_lain}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold pt-2 text-xl mb-5'>Maps</h3>
                    <img src="/src/assets/images/maps.svg" alt="maps" style={{ width: '100%' }} />
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
