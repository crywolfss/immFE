import React from 'react';
import { DocumentTextIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/16/solid';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const CustomLinearProgress = styled(LinearProgress)({
    height: 12,
    width: 391,
    borderRadius: 6,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Added shadow
    '& .MuiLinearProgress-bar': {
        backgroundColor: '#2B95F6',
    },
    backgroundColor: '#FFFFFF',
});

const progressData = [
    { label: 'Business', progress: 50 },
    { label: 'Investasi', progress: 25 },
    { label: 'Financial', progress: 25 },
    { label: 'Product', progress: 25 },
    { label: 'Impact', progress: 25 },
    { label: 'Project A', progress: 25 },
    { label: 'Project A', progress: 25 },
    { label: 'Project A', progress: 25 },
    { label: 'Project A', progress: 25 },
    { label: 'Project A', progress: 25 },
    { label: 'Project A', progress: 25 },
];

const ProgressRow = ({ label, progress }) => (
    <div className="flex items-center space-x-4 py-4">
        <span className="font-semibold text-black-700 w-32">{label}</span>
        <div className='flex flex-col items-start w-[391px]'>
            <span className="font-medium text-sm mb-1">Your Progress {progress}%</span>
            <CustomLinearProgress variant="determinate" value={progress} />
        </div>
        <div className="relative bg-gray-100 p-4 rounded-lg w-[491px] h-[38px] flex items-center">
            <DocumentTextIcon className="h-5 w-5 text-gray-700 mr-2" />
            <span className="font-semibold text-gray-700">Notes</span>
        </div>
        <button className="flex items-center bg-gray-200 p-2 rounded-lg w-[118px]">
            <PencilIcon className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-700">Edit</span>
        </button>
    </div>
);

export const ImmStatus = () => {
    return (
        <div className='mx-auto max-w-7xl p-6 lg:px-8'>
            <div>
                <h3 className='font-bold pt-10 text-xl'>Status</h3>
            </div>

            {/* Tambahkan field search */}
            <div className="mt-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    className="border-2 border-gray-300 bg-white h-10 pl-10 pr-5 rounded-lg text-sm focus:outline-none w-72"
                    placeholder="Search..."
                />
            </div>

            {/* Multiple rows with progress data */}
            {progressData.map((item, index) => (
                <ProgressRow key={index} label={item.label} progress={item.progress} />
            ))}
          <div style={{ height: '50px' }}></div>
        </div>
    );
};