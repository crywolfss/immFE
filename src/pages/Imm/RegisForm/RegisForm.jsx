import React from 'react'
import { Link } from 'react-router-dom'

export const RegisForm = () => {
    return (
        <div className='mx-auto  p-6 lg:px-8'>
            <div className="lg:px-8 border-gray-900/10 pb-12">


                <h2 className="px-6 py-4 text-3xl font-semibold leading-7 text-center text-gray-900">Daftarkan Perusahaan Anda</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Nama Perusahaan
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
                            Country
                        </label>
                        <div className="mt-2">
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nik" className="block text-sm font-medium leading-6 text-gray-900">
                            Profil Perusahaan
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
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="nama-pic" className="block text-sm font-medium leading-6 text-gray-900">
                            Nama PIC
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="nama-pic"
                                id="nama-pic"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="kabupaten" className="block text-sm font-medium leading-6 text-gray-900">
                            Kabupaten
                        </label>
                        <div className="mt-2">
                            <select
                                id="kabupaten"
                                name="kabupaten"
                                autoComplete="kabupaten-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="posisi-pic" className="block text-sm font-medium leading-6 text-gray-900">
                            Posisi PIC
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="posisi-pic"
                                id="posisi-pic"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="jumlah-karyawan" className="block text-sm font-medium leading-6 text-gray-900">
                            Jumlah Karyawan
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="jumlah-karyawan"
                                id="jumlah-karyawan"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 text-start sm:grid-cols-6 p-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="no-tel" className="block text-sm font-medium leading-6 text-gray-900">
                            Nomor Telepon
                        </label>
                        <div className="mt-2">
                            <input
                                type="tel"
                                name="no-tel"
                                id="no-tel"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="tipe-perusahaan" className="block text-sm font-medium leading-6 text-gray-900">
                            Tipe Perusahaan
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="tipe-perusahaan"
                                id="tipe-perusahaan"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                </div>

                <div className='flex flex-col w-full items-center'>
                    <Link to="/imm-home"
                        type="submit"
                        className="flex w-1/5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Simpan Data
                    </Link>
                </div>
            </div>

        </div>
    )
}
