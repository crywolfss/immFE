import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts'
import { Card, ListItem } from 'flowbite-react'
import { ImmBarChart } from '../../../common/Chart/BarChart/ImmBarChart'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/16/solid'



export const ImmHome = () => {
    return (
        <div className='mx-auto max-w-7xl items-center p-6 lg:px-8'>
            {/*Dashboard  */}
            <div>
                <h3 className='font-bold pt-10 text-xl'>Dashboard</h3>

                <div className="">
                    <div className="relative">
                        <Card className="bg-imm-secondary rounded-2xl">
                            <div className="flex flex-row gap-12 p-6 max-w-2xl">
                                <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" cornerRadius="50%"
                                    sx={(theme) => ({
                                        [`& .${gaugeClasses.valueText}`]: {
                                            fontSize: 16,
                                            color: '#fffff'
                                        },
                                        [`& .${gaugeClasses.valueArc}`]: {
                                            fill: '#ffffff',
                                        },
                                        [`& .${gaugeClasses.referenceArc}`]: {
                                            fill: theme.palette.text.disabled,
                                        },
                                    })} />
                                <div className="flex flex-col text-white justify-between lg:w-3/5">
                                    <div className='w-full'>
                                        <h3 className="font-bold text-lg">Your Progress on this project...........................</h3>
                                        <p className="font-semibold text-sm">Your Progress on this project...........................</p>
                                    </div>

                                    <div className='w-full'>
                                        <p className="font-semibold text-sm">Your Progress on this project...........................</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <img
                            src="src/assets/images/bisnis-hijau.png"
                            className="absolute top-5 right-5 h-40 w-40 shadow-lg rounded-3xl"
                            alt=""
                        />
                    </div>
                </div>


                <div className="flex w-full flex-row mt-10 gap-28">
                    <div className='border-2 rounded-xl max-w-3xl'>
                        <ImmBarChart />
                    </div>
                    <div className='flex flex-col w-full gap-8'>
                        <div className='border-2 rounded-lg p-6 flex flex-col gap-4'>
                            <div className="mb-4 flex flex-row items-center justify-between">
                                <div className='bg-yellow-100 rounded-full p-2'>
                                    <img src="src/assets/icons/icon-wallet.png" alt="" className='w-5 h-5' />
                                </div>
                                <img src="" alt="" srcset="src/assets/icons/icon-dots-menu.svg" className='h-4 w-4' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-normal text-gray-400 text-lg'>Total Balance</p>
                                <p className='font-semibold text-2xl'>Rp.50.000.000</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-lg p-6 flex flex-col gap-4'>
                            <div className="mb-4 flex flex-row items-center justify-between">
                                <div className='bg-red-100 rounded-full p-2'>
                                    <img src="src/assets/icons/icon-outcome.png" alt="" className='w-5 h-5' />
                                </div>
                                <img src="" alt="" srcset="src/assets/icons/icon-dots-menu.svg" className='h-4 w-4' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-normal text-gray-400 text-lg'>Total Outcome</p>
                                <p className='font-semibold text-2xl'>Rp.0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 border-2 rounded-lg'>
                <div className='flex p-4 justify-between border-b'>
                    <div className='flex gap-2 items-center'>
                        <img src="src/assets/icons/icon-square.png" alt="" className='w-5 h-5' />
                        <span>IMM Templates</span>
                    </div>
                    <div className='flex items-center'>
                        <form class=" mx-auto ">
                            <label class="relative block">
                                <span class="sr-only">Search</span>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </span>
                                <input class="bg-imm-secondary placeholder:font-semibold placeholder:text-gray-200 text-white placeholder:text-slate-400 block w-full  rounded-xl py-2 pl-9 pr-3  focus:outline-none border-0 focus:border-0 sm:text-sm" placeholder="Search your template" type="text" name="search" />
                            </label>
                        </form>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 p-4'>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="text-white text-lg bg-imm-secondary px-3 py-2 rounded-xl">Use Template</button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-black text-lg font-normal">Impact Mapping</h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="text-white text-lg bg-imm-secondary px-3 py-2 rounded-xl">Use Template</button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-black text-lg font-normal">Impact Mapping</h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="text-white text-lg bg-imm-secondary px-3 py-2 rounded-xl">Use Template</button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-black text-lg font-normal">Impact Mapping</h3>
                        </div>
                    </div>
                    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="text-white text-lg bg-imm-secondary px-3 py-2 rounded-xl">Use Template</button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-black text-lg font-normal">Impact Mapping</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='font-bold pt-10 text-xl'>Recent Project</h3>

                <div className='grid grid-cols-4 gap-4 pt-4'>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                          
                        </div>
                        <div className="mt-4 px-2 text-start">
                            <h3 className="text-xl font-bold">Wirausaha Muda</h3>
                            <p className="text-gray-600">25/04/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
