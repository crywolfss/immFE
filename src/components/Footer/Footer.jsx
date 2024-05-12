import React from 'react'

export const Footer = () => {
    return (
        <footer class="bottom-0">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className='bg-imm-main px-8 w-full rounded-t-3xl text-white flex '>
                    <div className='pt-7'>
                        <img src="src/assets/imm-logo.png" className='w-6 h-6' alt="" />
                    </div>
                    <div className='p-6 gap-8 flex flex-col'>
                        <div>
                            <p className='font-bold text-base'>Impact Measurement and Management (TBN INDONESIA X MAXY ACADEMY)</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='font-bold'>Social Media</span>
                            <span className='flex gap-4'>
                                <img src="src/assets/icons/icon-facebook.svg" alt="fb-icon" />
                                <img src="src/assets/icons/icon-instagram.svg" alt="ig-icon" />
                                <img src="src/assets/icons/icon-x.svg" alt="x-icon" />
                                <img src="src/assets/icons/icon-linkedin.svg" alt="linkedin-icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
