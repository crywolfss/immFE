import { ChevronDoubleDownIcon, } from '@heroicons/react/24/outline'
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { LinearProgress } from '@mui/joy'
import { Gauge } from '@mui/x-charts'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { Card, ListItem } from 'flowbite-react'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




export const Home = () => {
  return (
    <div className='mx-auto max-w-7xl items-center p-6 lg:px-8'>
      {/*Dashboard  */}
      <div>
        <h3 className='font-bold pt-10 text-xl'>Dashboard</h3>

        <div className="">
          <div className="relative">
            <Card className="bg-imm-main rounded-br-[200px] rounded-l-2xl rounded-tr-2xl">
              <div className="flex flex-row gap-12 p-6 max-w-2xl">
                <img
                  alt="Bonnie image"
                  src="src/assets/persons/person-1.jpg"
                  className="mb-3 h-28 w-28 object-cover rounded-full ms-10"
                />
                <div className="flex flex-col text-white justify-between lg:w-3/5">
                  <div className='w-full'>
                    <h3 className="font-bold text-lg">Zaky Kurniawan</h3>
                    <p className="font-semibold text-sm">Sociopreneur Bootcamp</p>
                  </div>

                  <div className='w-full'>
                    <span className="font-semibold text-sm">25% Completed</span>
                    <LinearProgress
                      color="primary"
                      determinate
                      size="lg"
                      value={25}
                    />
                  </div>
                </div>
              </div>
            </Card>
            <img
              src="src/assets/backgrounds/bg-chart.png"
              className="absolute top-0 right-0 h-full w-2/5 rounded-br-[200px] rounded-tr-md"
              alt=""
            />
          </div>
        </div>


        <div className='grid grid-cols-3 gap-4 pt-8'>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Assigment
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>

          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Absensi
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>

          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Progress
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>
        </div>
      </div>

      <div>
        <h3 className='font-bold pt-10 text-xl'>New Assignment</h3>

        <div className='flex flex-row w-full justify-between gap-20 pt-4'>
          <div className='w-full'>
            <Card className='bg-imm-secondary'>
              <div className="flex gap-4">
                <div>
                  <div className='rounded-full border-2 w-6 h-6 bg-white shadow-md border-white'></div>
                  <ChevronDownIcon className='h-6 w-6' />
                </div>

                <div className="font-medium text-base text-white">
                  Analisis Data Menggunakan Metode Machine Learning: Studi Kasus pada Industri Retail
                </div>
              </div>
            </Card>

            <h3 className='font-bold pt-6 text-xl pb-4'>New Quiz</h3>

            <Card className='bg-imm-secondary'>
              <div className="flex gap-4">
                <div>
                  <div className='rounded-full border-2 w-6 h-6 bg-white shadow-md border-white'></div>
                  <ChevronDownIcon className='h-6 w-6' />
                </div>

                <div className="font-medium text-base text-white">
                  Analisis Data Menggunakan Metode Machine Learning: Studi Kasus pada Industri Retail
                </div>
              </div>
            </Card>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='border-2 rounded-2xl shadow-xl border-black '>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>

            <div className='border-2 rounded-xl border-black'>
              <div className="p-6 flex flex-col gap-2">
                <p className='text-sm'>Schedule</p>
                <ul className='ms-4 text-sm list-disc'>
                  <li>18 April ( Bootcamp Sociopreneur )</li>
                  <li>Tap to add task</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}
