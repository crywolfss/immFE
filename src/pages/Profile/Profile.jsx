const Profile = () => {
    const days = Array.from({ length: 30 }, (_, index) => index + 1);
    return (
        <div className="container mx-auto p-4">
            <div className="rounded-lg p-6 mb-8">
                <div className="flex items-center mb-6">
                    <img src="src/assets/persons/person-2.svg" alt="Profile" className="w-[275px] h-[275px] rounded-full mr-6 mt-2" />
                    <div className="flex items-start">
                        <div className="flex flex-col ml-4">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold mt-6">Rizard Hazard</h1>
                            </div>
                            <div className="flex items-center font-semibold mt-4 mb-2">
                                <img src="src/assets/icons/icon-phone.svg" alt="Phone Icon" className="w-4 h-4 mr-2" />
                                <p>+6289534108080</p>
                            </div>
                            <div className="flex items-center font-semibold mb-2">
                                <img src="src/assets/icons/icon-email.svg" alt="Email Icon" className="w-5 h-5 mr-2" />
                                <p>rizardhazard@gmail.com</p>
                            </div>
                            <p className="flex items-center font-semibold mb-6">
                                <img src="src/assets/icons/icon-location.svg" alt="Location Icon" className="w-5 h-5 mr-2" />
                                Jl.Kuban Meruya Ilir Bl M/80 <br/> Jakarta, DKI Jakarta.
                            </p>
                            <div className="flex">
                            <button className="mt-2 px-2 bg-white text-[#4880FF] border border-[#4880FF] rounded relative mr-2">
                                <img src="src/assets/icons/icon-edit.svg" alt="Edit Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                <span className="pl-6">Edit</span>
                            </button>
                            <button className="h-7 w-11 mt-2 bg-white text-[#4880FF] border border-[#4880FF] rounded flex justify-center items-center relative">
                                <span className="absolute h-2 w-2 bg-[#4880FF] rounded-full" style={{ left: 'calc(50% - 14px)' }}></span>
                                <span className="absolute h-2 w-2 bg-[#4880FF] rounded-full" style={{ left: 'calc(50% - 4px)' }}></span>
                                <span className="absolute h-2 w-2 bg-[#4880FF] rounded-full" style={{ left: 'calc(50% + 6px)' }}></span>
                            </button>
                        </div>
                        </div>
                        <div className="rounded-lg p-4 mb-8 ml-60">
                            <h2 className="text-2xl font-bold mt-2 mb-2">Keahlian</h2>
                            <div className="bg-[#2A64F6] p-2 rounded px-12 text-center text-white font-semibold mb-2">
                                <p>Digital Marketing</p>
                            </div>
                            <div className="bg-[#2A64F6] p-2 rounded px-12 text-center text-white font-semibold mb-2">
                                <p>UI/ UX Desain</p>
                            </div>
                            <button className="bg-[#F7F6FB] border border-[#4880FF] w-60 p-2 rounded px-12 text-center font-semibold">
                                <p>+ Tambah</p>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-t border-[#4880FF]" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="rounded-3xl p-4 bg-[#7198F9] inline-block" style={{ height: 'fit-content' }}>
                    <div className="flex">
                        <h3 className="text-white text-xl font-bold mb-4">Akan Datang</h3>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 340, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 330, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 320, transform: 'scale(0.5)'}}></span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Rencana Kampanye Pemasaran</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Sep 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Mobile App</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Pembuatan Aplikasi Sederhana</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Sep 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Mobile App</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Pembuatan Aplikasi E-Commerce</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Sep 24</span>
                        </div>
                    </div>
                    </div>
                    <button className="py-2 text-white rounded mt-2">+ Tambahkan Permasalahan</button>
                    </div>
                    <div className="rounded-3xl p-4 bg-[#7198F9] inline-block" style={{ height: 'fit-content' }}>
                    <div className="flex">
                        <h3 className="text-white text-xl font-bold mb-4">Proses</h3>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 340, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 330, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 320, transform: 'scale(0.5)'}}></span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Optimalisasi Kampanye Media Sosial</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Optimisasi SEO Untuk Website</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Sociopreneur</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Model Canvas</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Sociopreneur</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Value Proportion Canvas</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    </div>
                    <button className="py-2 text-white rounded mt-2">+ Tambahkan Permasalahan</button>
                    </div>
                    <div className="rounded-3xl inline-block p-4 bg-[#7198F9]" style={{ height: 'fit-content' }}>
                    <div className="flex">
                        <h3 className="text-white text-xl font-bold mb-4">Selesai</h3>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 340, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 330, transform: 'scale(0.5)'}}></span>
                        <span className="absolute h-3 w-3 bg-white rounded-full mt-2" style={{marginLeft: 320, transform: 'scale(0.5)'}}></span>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Peningkatan Konversi Email Marketing</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Pengembangan Template Iklan Untuk Media Sosial</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    <div className="rounded-lg p-2 bg-white">
                    <div className="rounded-lg inline-block p-1 bg-[#5281F7]">
                        <div className="flex items-center">
                            <h3 className="text-s font-bold text-white">Marketing</h3>
                        </div>
                    </div>
                        <h3 className="font-bold mt-2">Evaluasi Dan Penjadwalan Acara Promosi</h3>
                        <div className="flex mt-1 items-center">
                            <img src="src/assets/icons/time-icon.svg" alt="Time Icon" className="w-4 h-4" />
                            <span className="ml-2 text-s text-[#4880FF]">Jun 24</span>
                        </div>
                    </div>
                    </div>
                    <button className="py-2 text-white rounded mt-2">+ Tambahkan Permasalahan</button>
                    </div>
                    </div>
                    <hr className="my-6 border-t border-[#4880FF]" />
                    <div className="flex mb-2">
                        <p className="text-2xl font-semibold flex items-center">
                            <img src="src/assets/icons/icon-sociopreneur.svg" alt="Icon" className="w-12 h-12 mr-2" />
                            Sociopreneur Bootcamp
                        </p>
                        <button className="px-2 mt-2 flex items-center">
                            <img src="src/assets/icons/icon-bahasa.svg" alt="Bahasa Icon" className="w-6 h-6" style={{ filter: 'invert(1)' }} />
                        </button>
                    </div>
                    <div className="flex mb-2 mt-8">
                        <p className="text-s font-semibold mr-8">Ringkasan</p>
                        <p className="text-s font-semibold mr-8">List</p>
                        <p className="text-s font-semibold mr-8 border-b-2 border-[#4880FF]">Timeline</p>
                    </div>
                    <hr className="border-t border-[#4880FF]" style={{ width: '20%' }}/>
                    <div className="flex mt-4">
                        <p className="text-2xl font-semibold mr-48">Juni</p>
                        {days.map(day => (
                            <p key={day} className="text-lg font-semibold ml-4">{day}</p>
                        ))}
                    </div>
                    <hr className="border-t border-[#4880FF]"/>
                    <div className="flex mt-4 mb-3">
                        <p className="text-m font-semibold mr-6">Orientation Rule</p>
                        <div className="bg-[#7198F9] rounded-lg p-4" style={{ width: '410px', marginTop: '-4px', marginLeft: '105px'}}></div>
                    </div>
                    <hr className="my-2 border-t border-[#4880FF]"/>
                    <div className="flex mt-4">
                    <p className="text-m font-semibold">
                        Business Model Canvas<br />
                        And Sharpening Innovation
                    </p>
                        <div className="bg-[#7198F9] rounded-lg p-4" style={{ width: '355px', marginTop: '-2px', marginLeft: '200px'}}></div>
                    </div>
                    <hr className="my-4 border-t border-[#4880FF]"/>
                    <div className="flex mt-4">
                    <p className="text-m font-semibold">
                        Testing Card Desirability<br />
                        Value Proposition
                    </p>
                        <div className="bg-[#7198F9] rounded-lg p-4" style={{ width: '350px', marginTop: '-2px', marginLeft: '600px'}}></div>
                    </div>
                    <hr className="my-4 border-t border-[#4880FF]"/>
                    <div className="flex mt-4">
                        <p className="text-m font-semibold">Customer Journey Market Fit</p>
                        <div className="bg-[#7198F9] rounded-lg p-4" style={{ width: '125px', marginTop: '-2px', marginLeft: '950px'}}></div>
                    </div>
                    <hr className="my-4 border-t border-[#4880FF]"/>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xl font-semibold mt-4">Pilihan Bahasa</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#0F1F3E] text-white px-4 py-3 rounded font-semibold flex items-center">
                            <img src="src/assets/icons/bahasa-icon.svg" alt="Bahasa Icon" className="w-6 h-6 mr-2" />
                            Bahasa Indonesia
                        </button>
                        <button className="bg-[#0F1F3E] text-white px-4 py-2 rounded font-semibold flex items-center">
                        <img src="src/assets/icons/icon-logout.svg" alt="Logout Icon" className="w-6 h-6 mr-2" />
                            Log Out
                        </button>
                    </div>
                    <div className="flex justify-center mt-8">
                    <p className="text-xs font-semibold text-[#2A64F6] mr-1">"Kebijakan Privasi"</p>
                    <p className="text-xs text-[#2A64F6] mr-1">Dan</p>
                    <p className="text-xs font-semibold text-[#2A64F6]">"Syarat & Ketentuan"</p>
                    </div>
            </div>
        </div>
    );
};

export default Profile;
