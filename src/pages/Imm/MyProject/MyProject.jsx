import { LinearProgress } from '@mui/joy'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CustomizedTables from '../../../common/Table/CustomizedTable'
import CustomizedFileTable from '../../../common/Table/CustomizedFileTable'
import { StarIcon } from '@heroicons/react/24/solid'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import HorizontalBarChart from '../../../common/Chart/HorizontallBarChart/HorizontalBarChart'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BarChart, Gauge, gaugeClasses } from '@mui/x-charts'
import { ImmBarChart } from '../../../common/Chart/BarChart/ImmBarChart'
import { DataCalendar } from '../../../common/DataCalendar/DataCalendar'

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

                    <CustomizedTables />
                </div>
            </div>

            <div className="pt-2">
                <h3 className='font-bold pt-10 text-xl'><span className='border-l border-2 mr-2 border-imm-secondary'></span>Done Projects And Surveys</h3>
                <div className='mt-8 pt-3 border-2 border-black rounded-lg'>
                    <div className="px-4 flex flex-row justify-between items-center pb-2">
                        <h5 className='font-bold text-lg'>Project Completed</h5>

                        <select className="border border-imm-secondary rounded px-2 py-1">
                            <option value="option1">Monthly</option>
                            <option value="option2">Yearly</option>
                        </select>
                    </div>
                    <CustomizedFileTable />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 '>
                <div className='shadow-md rounded-lg p-3 mt-10 border'>
                    <div className='border-b pb-2'>
                        <span className='flex justify-between'><p className='font-semibold'>How did you know about the product?</p> <span className='flex items-center gap-1'><StarIcon className='h-5 w-5 text-yellow-300 ' /> 5/5</span></span>
                        <span className='text-sm text-gray-400'>40 answers</span>
                    </div>
                    <div className='pt-4'>
                        <div className='flex justify-between items-center text-sm mb-2'>
                            <span className='flex items-center gap-2 '><div className='rounded-full bg-green-400 h-3 w-3'></div> From the advert </span>
                            <p>35%</p>
                        </div>

                        <LinearProgress
                            color="neutral"
                            determinate
                            size="lg"
                            value={35}
                        />
                    </div>

                    <div className='pt-4'>
                        <div className='flex justify-between items-center text-sm mb-2'>
                            <span className='flex items-center gap-2 '><div className='rounded-full bg-green-400 h-3 w-3'></div> Google Search </span>
                            <p>43%</p>
                        </div>

                        <LinearProgress
                            color="neutral"
                            determinate
                            size="lg"
                            value={43}
                        />
                    </div>
                    <div className='pt-4'>
                        <div className='flex justify-between items-center text-sm mb-2'>
                            <span className='flex items-center gap-2 '><div className='rounded-full bg-green-400 h-3 w-3'></div> From Our Social Account </span>
                            <p>35%</p>
                        </div>

                        <LinearProgress
                            color="neutral"
                            determinate
                            size="lg"
                            value={55}
                        />
                    </div>
                    <div className='pt-4'>
                        <div className='flex justify-between items-center text-sm mb-2'>
                            <span className='flex items-center gap-2 '><div className='rounded-full bg-green-400 h-3 w-3'></div> Others</span>
                            <p>35%</p>
                        </div>

                        <LinearProgress
                            color="neutral"
                            determinate
                            size="lg"
                            value={75}
                        />
                    </div>
                </div>

                <div className='p-3 mt-10'>
                    <div className='items-center flex-col flex'>
                        <span className='rounded-full bg-gray-200 p-3'>
                            <ArrowsPointingOutIcon className='h-5 w-5' />
                        </span>
                        <p className='text-4xl text-center font-bold'>Qestions</p>
                        <p className='text-4xl text-center font-bold text-green-400'>Answer</p>
                    </div>

                    <div className='shadow-md rounded-lg border p-3 mt-6'>
                        <div className='border-b pb-2'>
                            <span className='flex justify-between items-center'><p className='font-semibold text-sm'>Do you think the price is reasonable ?</p> <span className='flex items-center gap-1'><StarIcon className='h-5 w-5 text-yellow-300 ' /> 5/5</span></span>
                            <span className='text-sm text-gray-400'>40 answers</span>
                        </div>

                        <div className='flex flex-row gap-2 w-full pt-2'>
                            <div className='w-2/5'>
                                <span className='flex justify-between'><p>Yes</p> <p>40%</p></span>
                                <LinearProgress
                                    color="neutral"
                                    determinate
                                    size="lg"
                                    value={85}
                                />
                            </div>
                            <div className='w-3/5'>
                                <span className='flex justify-between'><p>Yes</p> <p>60%</p></span>
                                <LinearProgress
                                    color="success"
                                    determinate
                                    size="lg"
                                    value={85}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shadow-md rounded-lg p-3 mt-10 border'>
                    <div className='border-b pb-2'>
                        <span className='flex justify-between gap-2 items-center'><p className='font-semibold'>How likely are you to recommend us to a family and friends?</p> <span className='flex items-center gap-1'><StarIcon className='h-5 w-5 text-yellow-300 ' /> 5/5</span></span>
                        <span className='text-sm text-gray-400'>40 answers</span>
                    </div>

                    <div className='max-w-md'>
                        <HorizontalBarChart />
                    </div>
                </div>
            </div>

            <div>
                <div className='grid mt-4 mx-24 grid-cols-3 gap-4'>
                    <div className='rounded-lg gap-4 border-2 flex flex-col max-w-lg px-16 py-6 items-center'>
                        <p className='font-bold text-gray-400'>Survey Send</p>
                        <p className='text-3xl font-bold'>60</p>
                    </div>

                    <div className='rounded-lg gap-4 border-2 flex flex-col max-w-lg px-16 py-6 items-center'>
                        <p className='font-bold text-gray-400'>Response Received</p>
                        <p className='text-3xl font-bold'>42</p>
                    </div>

                    <div className='rounded-lg gap-4 border-2 flex flex-col max-w-lg px-16 py-6 items-center'>
                        <p className='font-bold text-gray-400'>Response Pending</p>
                        <p className='text-3xl font-bold'>12</p>
                    </div>
                </div>

                <div>
                    <div className='grid mt-4 mx-40 grid-cols-2 gap-4 '>
                        <div className='rounded-lg shadow-lg'>
                            <div className='grid grid-cols-3 items-center bg-green-400 rounded-t-lg text-white'>
                                <div className='relative flex flex-col items-center text-sm py-4'>
                                    <p>Average Time</p>
                                    <p>5.32%</p>
                                    <div className='absolute right-0 top-1/2 h-10 border-r border-white transform -translate-y-1/2'></div>
                                </div>
                                <div className='relative flex flex-col items-center text-sm py-4'>
                                    <p>Completion Rate</p>
                                    <p>84.32%</p>
                                    <div className='absolute right-0 top-1/2 h-10 border-r border-white transform -translate-y-1/2'></div>
                                </div>
                                <div className='flex justify-center py-4'>
                                    <Gauge
                                        width={60}
                                        height={60}
                                        value={75}
                                        innerRadius="82%"
                                        outerRadius="100%"
                                        cornerRadius="50%"
                                        sx={(theme) => ({
                                            [`& .${gaugeClasses.valueText}`]: {
                                                fontSize: 16,
                                                color: '#ffffff',
                                            },
                                            [`& .${gaugeClasses.valueArc}`]: {
                                                fill: '#ffffff',
                                            },
                                            [`& .${gaugeClasses.referenceArc}`]: {
                                                fill: theme.palette.text.disabled,
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col p-3 gap-6 mb-8 '>
                                <div className='flex flex-row items-center gap-2 px-8'>
                                    <p className='text-3xl font-bold text-green-400'>94%</p>
                                    <p className='text-xl'>Total Responses</p>
                                </div>
                                <LinearProgress
                                    color="primary"
                                    determinate
                                    size="lg"
                                    value={100}
                                />
                            </div>
                        </div>

                        <div className='rounded-lg shadow-lg'>
                            <p className='font-bold p-4'>Vertical Performance</p>
                            <BarChart
                                xAxis={[{ scaleType: 'band', data: ['Person A', 'Person B', 'Person C'] }]}
                                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                width={450}
                                height={200}
                            />
                        </div>


                    </div>
                </div>
            </div>


            <div>
                <h3 className='font-bold pt-10 text-xl'><span className='border-l border-2 mr-2 border-imm-secondary'></span>Schedule Project</h3>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='max-w-lg mt-8 flex flex-col gap-4'>
                        <div className='border border-black rounded-lg p-3 flex flex-col'>
                            <span className='flex items-center gap-2'><div className="rounded-full bg-red-600 h-3 w-3"></div> Urgent</span>
                            <p className='text-center font-semibold text-gray-700'>Invest Department</p>
                        </div>
                        <div className='border border-black rounded-lg p-3 flex flex-col'>
                            <span className='flex items-center gap-2'><div className="rounded-full bg-red-600 h-3 w-3"></div> Urgent</span>
                            <p className='text-center font-semibold text-gray-700'>Invest Department</p>
                        </div>
                        <div className='border border-black rounded-lg p-3 flex flex-col'>
                            <span className='flex items-center gap-2'><div className="rounded-full bg-red-600 h-3 w-3"></div> Urgent</span>
                            <p className='text-center font-semibold text-gray-700'>Invest Department</p>
                        </div>
                        <div className='border border-black rounded-lg p-3 flex flex-col'>
                            <span className='flex items-center gap-2'><div className="rounded-full bg-red-600 h-3 w-3"></div> Urgent</span>
                            <p className='text-center font-semibold text-gray-700'>Invest Department</p>
                        </div>
                    </div>
                    <div className='col-span-2 mt-7'>
                        <DataCalendar/>
                    </div>
                </div>
            </div>
        </div>
    )
}