import React from 'react';
import { Link } from 'react-router-dom';

export const ImmCreate = () => {
    return (
        <div className='mx-auto max-w-7xl items-center lg:px-8'>
            <div>
                <h3 className='font-bold pt-8 text-xl mb-10' style={{fontSize: '24px'}}>Proyek Terbaru</h3>
                <div className="mt-6 flex">
                    <div className="rounded-xl overflow-hidden flex-grow relative mr-5" style={{ maxWidth: 'calc(50%)' }}>
                        <div style={{ backgroundImage: 'url("src/assets/backgrounds/bg-card-create.svg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', borderRadius: '20px 20px 0 0' }}></div>
                        <div style={{ backgroundColor: '#7198F9', height: '160px', borderRadius: '0 0 20px 20px', position: 'relative' }}>
                            <span className="text-white mt-1" style={{ position: 'absolute', top: 0, left: 0, fontSize: '24px', fontWeight: 'bold', padding: '10px', marginLeft: '12px' }}>Pasar Pedesaan</span>
                            <p className="text-white px-6 py-14">Memfasilitasi pasar pedesaan untuk mendukung petani lokal dan pengusaha kecil dan membantu kesenjangan ekonomi</p>
                            <div style={{ position: 'absolute', top: '16px', left: '12px', display: 'flex', alignItems: 'center' }}>
                                <p className="text-white font-semibold px-3 py-24" style={{ marginRight: '8px' }}>Kategori : Bisnis Baru</p>
                                <img src="src/assets/icons/icon-time.svg" alt="icon" className="mr-2 ml-2" style={{ width: '16px', height: '16px' }} />
                                <p className="text-white font-semibold py-24">Mei 24</p>
                                <img src="src/assets/icons/icon-panah.svg" alt="open" style={{marginLeft: '220px', marginBottom: '12px'}}  />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden flex-grow relative ml-5" style={{ maxWidth: 'calc(50%' }}>
                        <div style={{ backgroundImage: 'url("src/assets/backgrounds/bg-card-create.svg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '240px', borderRadius: '20px 20px 0 0' }}></div>
                        <div style={{ backgroundColor: '#7198F9', height: '160px', borderRadius: '0 0 20px 20px', position: 'relative' }}>
                            <span className="text-white mt-1" style={{ position: 'absolute', top: 0, left: 0, fontSize: '24px', fontWeight: 'bold', padding: '10px', marginLeft: '12px' }}>Pemberdayaan Wanita</span>
                            <p className="text-white px-6 py-14">Menyediakan pelatihan keterampilan dan dukungan bagi wanita untuk memulai atau mengembangkan usaha mereka sendiri</p>
                            <div style={{ position: 'absolute', top: '16px', left: '12px', display: 'flex', alignItems: 'center' }}>
                                <p className="text-white font-semibold px-3 py-24" style={{ marginRight: '8px' }}>Kategori : Bisnis Yang Sudah Ada</p>
                                <img src="src/assets/icons/icon-time.svg" alt="icon" className="mr-2 ml-2" style={{ width: '16px', height: '16px' }} />
                                <p className="text-white font-semibold py-24">Mei 24</p>
                                <Link to="/form-update">
                                <img src="src/assets/icons/icon-panah.svg" alt="open" style={{marginLeft: '150px', marginBottom: '12px'}}  />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/form-create" className="rounded-full bg-blue-600 flex items-center justify-center" style={{ width: '200px', height: '60px' }}>
                        <img src="src/assets/icons/icon-plus.svg" alt="icon" className="mr-2" style={{ width: '20px', height: '20px' }} />
                        <p className="text-white font-semibold">Buat Projek</p>
                    </Link>
                </div>
                <div style={{ height: '100px' }}></div>
            </div>
        </div>
    );
};

export default ImmCreate;
