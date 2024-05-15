

const Bootcamp = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h1 className="text-3xl font-bold mb-4">Sociopreneurship! Belajar Dari <span className="text-imm-main">Bootcamp</span> Yang Menyenangkan.</h1>
                <p className="text-gray-700 mb-6">Selamat datang di Impact Measurement and Management (IMM)! Kembangkan Bisnismu dengan Dampak Positif dan Ikuti IMM. Program Kolaborasi Sociopreneurship dari TBN Indonesia dan Masy Academy.</p>
                <button className="bg-imm-main text-white py-2 px-4 rounded">Cari Bootcamp Sekarang</button>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Kelas Yang Diikuti</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/sociopreneur.jpg" alt="Sociopreneur" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Sociopreneur</h3>
                        <p className="text-gray-700">Kenapa sociopreneurship dan SDGs</p>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 rounded">Materi Course</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/pitching.jpg" alt="Pitching" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Pitching</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 rounded">Materi Course</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/influence-marketing.jpg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Influence Marketing</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 rounded">Materi Course</button>
                    </div>
                </div>
                <div className="text-right mt-4">
                    <a href="#" className="text-imm-main">Lihat Kelas Yang Diikuti →</a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Pilihan Bootcamp</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/influence-marketing.jpg" alt="Influence Marketing" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Influence Marketing</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-right">
                            <span className="text-imm-main font-bold">Rp 150.000</span>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded">Beli Sekarang</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/desirability.jpg" alt="Desirability" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Desirability</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-right">
                            <span className="text-imm-main font-bold">Rp 450.000</span>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded">Beli Sekarang</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/itching.jpg" alt="Pitching" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Pitching</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-right">
                            <span className="text-imm-main font-bold">Rp 350.000</span>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded">Beli Sekarang</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="src/assets/Bootcamp/metrics-ecosystem.jpg" alt="Metrics Ecosystem" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="text-lg font-bold mt-4">Metrics Ecosystem</h3>
                        <p className="text-gray-700">How to create successful influencer marketing campaigns</p>
                        <div className="mt-2 text-right">
                            <span className="text-imm-main font-bold">Rp 250.000</span>
                        </div>
                        <button className="bg-imm-main text-white py-2 px-4 mt-4 w-full rounded">Beli Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Bootcamp;
