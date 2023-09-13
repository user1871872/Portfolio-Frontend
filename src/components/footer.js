import React from 'react'

export default function footer() {
    return (
        <div className='bg-black w-full'>
            <div className='flex justify-between p-20 sm:flex flex-col lg:flex-row items-center'>
                <div className='text-white'>
                    <p className='text-4xl'>Social Links</p>
                    <div className='flex justify-center gap-1'>
                        <img className='w-[50px]' src='/images/face.png' alt='' />
                        <img className='w-[50px]' src='/images/insta.png' alt='' />
                        <img className='w-[50px]' src='/images/twit.png' alt='' />
                    </div>
                </div>
                <div className='text-white'>
                    <p className='text-4xl'>Contact Me</p>
                    <p>Email: Ajd62874@gmail.com</p>
                    <p>Phone Number; 091289521</p>
                </div>
            </div>
            <div className='bg-yellow-400 text-center p-6'>
                <p>@ajfelisarta</p>
                <p>All Rights Reserve</p>
            </div>
        </div>
    )
}

