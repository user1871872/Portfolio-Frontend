import React from 'react'

export default function footer() {
    return (
        <div className='bg-black w-full'>
            <div className='flex justify-between p-20 sm:flex flex-col lg:flex-row items-center'>
                <div className='text-white'>
                    <p className='text-4xl'>Social Links</p>
                    <div className='flex justify-center gap-3'>
                       <a href='https://web.facebook.com/aj.felisartaa/'><img className='w-[50px]' src='/images/face.png' alt='' /></a>
                        <img className='w-[50px]' src='/images/insta.png' alt='' />
                        <img className='w-[50px]' src='/images/twit.png' alt='' />
                    </div>
                </div>
                <div id='contact' className='text-white pt-10 lg:pt-0'>
                    <p className='text-4xl'>Contact Me</p>
                    <p>Email: Ajd62874@gmail.com</p>
                    <p>Phone Number; 091289521</p>
                  <a href='https://drive.google.com/file/d/1EQC9lxwhRL9XyXoNkVSTB4tplc_es-cL/view?usp=drive_link'>
                  <button className='bg-yellow-500 p-2 rounded-md w-full'>Resume/CV</button>
                  </a>
                </div>
            </div>
            <div className='bg-yellow-400 text-center p-6'>
                <p>@ajfelisarta</p>
                {/* <p>wana ko kasabot</p> */}
            </div>
        </div>
    )
}

