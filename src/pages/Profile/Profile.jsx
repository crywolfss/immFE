

const Profile = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <div className="flex items-center mb-6">
                    <img src="src/assets/persons/person-1.jpg" alt="Profile" className="w-24 h-24 rounded-full mr-6" />
                    <div>
                        <h1 className="text-2xl font-bold">Rizard Hazard</h1>
                        <p className="text-gray-700">+6289534108080</p>
                        <p className="text-gray-700">rizardhazard@gmail.com</p>
                        <p className="text-gray-700">Jl.Kuban Meruya Ilir Bl M/80 Jakarta, DKI Jakarta.</p>
                        <button className="mt-2 px-4 py-2 bg-imm-main text-white rounded">Edit</button>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2">Digital Marketing</span>
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2">UI/UX Desain</span>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">+ Tambah</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Akan Datang</h3>
                        <ul>
                            <li className="mb-2">Rencana Kampanye Pemasaran</li>
                            <li className="mb-2">Penelitian</li>
                            <li className="mb-2">Pembuatan Aplikasi Sederhana</li>
                            <li className="mb-2">Pembuatan Aplikasi E-Commerce</li>
                        </ul>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">+ Tambahkan Permasalahan</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Proses</h3>
                        <ul>
                            <li className="mb-2">Optimalkan Kampanye Media Sosial</li>
                            <li className="mb-2">Optimalkan SEO untuk Website</li>
                            <li className="mb-2">Manajemen</li>
                            <li className="mb-2">Video Pengujian Cases</li>
                        </ul>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">+ Tambahkan Permasalahan</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Selesai</h3>
                        <ul>
                            <li className="mb-2">Konsultasi Konversi Email Marketing</li>
                            <li className="mb-2">Pengembangan Tampilan Lintas untuk Media Sosial</li>
                            <li className="mb-2">Evaluasi Proyek</li>
                            <li className="mb-2">Evaluasi dan Penyelesaian Akun Promosi</li>
                        </ul>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">+ Tambahkan Permasalahan</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
                    <h2 className="text-xl font-bold mb-4">Sociopreneur Bootcamp</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-imm-main text-white">Bulan</th>
                                    <th className="py-2 px-4 bg-imm-main text-white">Agenda</th>
                                    <th className="py-2 px-4 bg-imm-main text-white">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border">Juni</td>
                                    <td className="py-2 px-4 border">Orientation Rule</td>
                                    <td className="py-2 px-4 border">1-7 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Business Model Canvas And Sharpening Innovation</td>
                                    <td className="py-2 px-4 border">8-14 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Testing Day</td>
                                    <td className="py-2 px-4 border">15 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Design Card</td>
                                    <td className="py-2 px-4 border">16 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Value Proposition</td>
                                    <td className="py-2 px-4 border">17-21 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Customer Journey</td>
                                    <td className="py-2 px-4 border">22-25 Juni</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border"></td>
                                    <td className="py-2 px-4 border">Market Fit</td>
                                    <td className="py-2 px-4 border">26-30 Juni</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Bahasa Indonesia</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
