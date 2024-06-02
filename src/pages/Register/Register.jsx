import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
    const navigate = useNavigate();

    const handleSaveData = async () => {
        const nama_lengkap = document.getElementById("first-name").value;
        const negara = document.getElementById("country").value;
        const nik = document.getElementById("nik").value;
        const provinsi = document.getElementById("provinsi").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;
        const password = document.getElementById("password").value;
        const no_hp = document.getElementById("phone-number").value;

        if (
            nama_lengkap === '' ||
            negara === '' ||
            nik === '' ||
            provinsi === '' ||
            email === '' ||
            alamat === '' ||
            password === '' ||
            no_hp === ''
        ) {
            // Jika ada field yang kosong, tampilkan pesan alert
            alert("Mohon mengisi form terlebih dahulu.");
        } else {
            try {
                console.log(nama_lengkap);
                console.log(nik);
                // Mengirim data ke endpoint /registered
                const response = await axios.post("http://127.0.0.1:8000/api/register", {
                    nama_lengkap,
                    nik,
                    email,
                    password,
                    negara,
                    provinsi,
                    alamat,
                    no_hp
                });

                if (response.status === 200) {
                    // Jika berhasil, tampilkan pesan alert berhasil
                    alert("Berhasil membuat akun");

                    // Arahkan pengguna ke halaman login
                    navigate("/login");
                } else {
                    // Jika gagal, tampilkan pesan alert gagal
                    alert("Gagal membuat akun, coba lagi.");
                }
            } catch (error) {
                // Tangani error yang mungkin terjadi selama permintaan
                alert("Terjadi kesalahan: " + error.message);
                console.log(error);
            }
        }
    };

    return (
        <div className='mx-auto p-6 lg:px-8'>
            <div className="navbar-divider" style={{ borderBottom: '4px solid #7198F9', marginTop: '-25px', marginBottom: '40px', marginLeft: '-6rem', marginRight: '-2rem' }}></div>
            <div className="lg:px-8 border-gray-900/10 pb-12">
                <div className='flex flex-col w-full items-center'>
                    <img
                        className="h-10 w-auto"
                        src="src/assets/imm-logo.svg"
                        alt="Your Company"
                    />
                </div>

                <h2 className="px-6 text-3xl font-semibold leading-7 text-gray-900">Daftarkan akun</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nama Lengkap
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Negara
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            >
                                <option>Indonesia</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nik" className="block text-sm font-medium leading-6 text-gray-900">
                            NIK
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="nik"
                                id="nik"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="provinsi" className="block text-sm font-medium leading-6 text-gray-900">
                            Provinsi
                        </label>
                        <div className="mt-2">
                            <select
                                id="provinsi"
                                name="provinsi"
                                autoComplete="provinsi-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            >
                                <option>Kalimantan Timur</option>
                                <option>Jawa Barat</option>
                                <option>Jawa Timur</option>
                                <option>Jawa Tengah</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="alamat" className="block text-sm font-medium leading-6 text-gray-900">
                            Alamat Lengkap
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="alamat"
                                id="alamat"
                                autoComplete="alamat"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                            Nomor Telepon
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full items-center'>
                    <button
                        type="button"
                        onClick={handleSaveData}
                        className="flex w-1/5 justify-center rounded-md bg-[#0F1F3E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7198F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Simpan Data
                    </button>
                    <div className="text-sm flex max-w-full flex-row mt-4">
                        Sudah punya akun?
                        <Link to="/login" className="font-semibold px-1 text-black hover:text-[#7198F9]">
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
