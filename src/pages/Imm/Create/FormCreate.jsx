import React from 'react';

export const FormCreate = () => {
    return (
        <div className='mx-auto max-w-7xl items-center lg:px-8'>
            <div>
                <h3 className='font-bold pt-8 text-xl mb-6' style={{fontSize: '24px'}}>Buat Projek Terbaru</h3>
                <p className='text-lg font-semibold mb-6'>Pilih tag atau buat yang baru</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Card 1', 'Card 2', 'Card 3'].map((card, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                            <h4 className="text-lg font-bold">{card}</h4>
                            <p className="mt-2 text-sm text-gray-600">Deskripsi singkat untuk {card}.</p>
                        </div>
                    ))}
                </div>
                <div style={{ height: '100px' }}></div>
            </div>
        </div>
    );
};

export default FormCreate;
