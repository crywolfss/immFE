import React from 'react';

export const FormCreate = () => {
    return (
        <div className='mx-auto max-w-7xl items-center lg:px-8'>
            <div>
                <h3 className='font-bold pt-8 text-xl mb-6' style={{fontSize: '24px'}}>Buat Projek Terbaru</h3>
                <p className='text-lg font-semibold mb-6'>Pilih tag atau buat yang baru</p>
                <div className="flex space-x-4">
                    {['Environment', 'Education', 'Health'].map((card, index) => (
                        <div key={index} className="bg-blue-500 text-white shadow-lg rounded-lg p-4 w-40 flex justify-between items-center">
                            <h4 className="text-lg font-bold">{card}</h4>
                            <button className="ml-2 text-white font-bold">x</button>
                        </div>
                    ))}
                </div>
                <div style={{ height: '100px' }}></div>
            </div>
        </div>
    );
};

export default FormCreate;
