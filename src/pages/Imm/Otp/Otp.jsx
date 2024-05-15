import React from 'react'
import { Link } from 'react-router-dom'

export const Otp = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

            <div class="relative px-6 pt-10 pb-9 mx-auto w-full max-w-lg ">
                <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div class="flex flex-col items-center justify-center text-center space-y-2">
                        <div class="font-semibold text-3xl">
                            <p>Masukan Kode Verifikasi Anda</p>
                        </div>
                        <div class="flex flex-row text-sm font-medium text-gray-400">
                            <p>Masukkan kode verifikasi Cek email anda untuk menerima kode</p>
                        </div>
                    </div>

                    <div>
                        <form action="" method="post">
                            <div class="flex flex-col space-y-16">
                                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                    </div>
                                </div>


                                <div class="flex flex-col items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                    <p>Belum menerima kode? tunggu 01:00</p> <Link to="/imm-registration-form" class="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Kirim ulang kode</Link>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
