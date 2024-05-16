import { LinearProgress } from '@mui/joy'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CustomizedTables from '../../../common/Table/CustomizedTable'

export const MyProject = () => {
    return (
        <div className='mx-auto max-w-7xl items-center p-6 lg:px-8'>
            <div>
                <h3 className='font-bold pt-10 text-xl'><span className='border-l border-2 mr-2 border-imm-secondary'></span>Draft Project</h3>

                <form class=" pt-10 max-w-md items-start">
                    <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </span>
                        <input class="bg-imm-secondary placeholder:font-semibold placeholder:text-white text-white placeholder:text-slate-400 block w-full  rounded-xl py-2 pl-9 pr-3  focus:outline-none border-0 focus:border-0 sm:text-sm" placeholder="Search " type="text" name="search" />
                    </label>
                </form>

                <div className='pt-10'>
                    <div className='flex flex-row justify-between'>
                        <h4 className='font-bold text-lg'>All Projects (12)</h4>
                        <span className='text-sm font-semibold'>See All</span>
                    </div>

                    <div className='grid grid-cols-4 gap-4'>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/backgrounds/bg-card-project.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
                                    Sociopreneur Department
                                </Typography>
                                <div className='flex flex-col'>
                                    <LinearProgress
                                        color="primary"
                                        determinate
                                        size="lg"
                                        value={85}
                                    />
                                    <p className='text-end text-sm'>85% Completed</p>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', }}>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Update</button>
                                <button className='border border-black bg-gray-100 px-10 py-2 rounded-lg text-sm'>Delete</button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='pt-10'>
                <h3 className='font-bold pt-10 text-xl'><span className='border-l border-2 mr-2 border-imm-secondary'></span>On Going Project</h3>
                <div className='pt-10'>
                    <div className="flex flex-row justify-between pb-10">
                        <select className="border rounded px-2 py-1">
                            <option value="option1">Today</option>
                            <option value="option2">Tommorow</option>
                            <option value="option3">Yesterday</option>
                        </select>

                        <select className="border rounded px-2 py-1">
                            <option value="option1">5 of 12</option>
                            <option value="option2">12 of 20</option>
                            <option value="option3">20 of 25</option>
                        </select>
                    </div>

                    <CustomizedTables/>
                </div>
                <div style={{ height: '50px' }}></div>
            </div>
        </div>
    )
}
