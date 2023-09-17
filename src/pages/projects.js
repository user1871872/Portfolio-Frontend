import React from 'react'

export default function projects() {
    return (
        <div id='project' className='container m-auto pt-14 lg:pt-20'>
            <div className='p-6 z-10'>

                <h1 className='font-bold text-3xl m-auto text-center lg:text-left'>Projects</h1>
                <h3 className='text-lg text-center lg:text-left tracking-tight'>
                    This is my projects since 2021. I'm trying my best to improve my coding skills and to adopt other programming languages
                </h3>

                {/* <div className='flex flex-row justify-between pt-10 mx-10'>
  <div className='w-20 h-20 rounded-md gap-10 flex flex-wrap'>
    <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/shopee1.png' alt='' />
    <img className='rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/lazada2.jpg' alt='' />
    <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/palawan.png' alt='' />
  </div>

  <div className='w-1/2 border border-red-600 z-10 gap-10'>
    <img className='' src='images/shopeeimage.jpg' alt='' />
    <img className='' src='images/lazadaImage.jpg' alt='' />
    <img className='' src='images/palawanImage.jpg' alt='' />
  </div>
</div> */}
                <div className='delay-300 duration-500 transition-all flex flex-wrap -m-4 opacity-100 mt-10'>
                    <div className='xl:w-1/3 md:w-1/4 p-4'>
                        <div className='p-6 items-center  border overflow-hidden group shadow-2xl'>
                            <p className='text-lg'>HOLY INFANT ACADEMY PORTAL</p>
                            Source code:
                            <div className='flex flex-row gap-5'>
                                <a href='https://github.com/user1871872/Hia-Frontend'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Front-End</h3></a>
                                <a href='https://github.com/user1871872/Hia-Backend'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Back-End</h3></a>
                            </div>
                            <img className='w-full' src='images/porfolio1.jpg' alt='' />
                            <h3 className='tracking-widest text-xs font-medium title-font'>React JS</h3>
                            <button className='w-full bg-blue-500 p-3 mt-3'>View Project</button>
                        </div>
                    </div>

                    <div className='xl:w-1/3 md:w-1/4 p-4'>
                        <div className='p-6 items-center border overflow-hidden group shadow-2xl'>
                            <p className='text-lg'>UBI General Merchandise Reservation</p>
                            Source code:
                            <div className='flex flex-row gap-5'>
                                <a href='https://github.com/user1871872/UBPlaza-Frontend'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Front-End</h3></a>
                                <a href='https://github.com/user1871872/UBPlaza-Backend'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Back-End</h3></a>
                            </div>
                            <img className='w-full' src='images/portfolio2.jpg' alt='' />
                            <h3 className='tracking-widest text-xs font-medium title-font'>React JS</h3>
                            <button className='w-full bg-blue-500 p-3 mt-3'>View Project</button>
                        </div>
                    </div>

                    <div className='xl:w-1/3 md:w-1/4 p-4'>
                        <div className='p-6 items-center border overflow-hidden group shadow-2xl'>
                            <p className='text-lg'>Gross Pay Calculator</p>
                            Source code:
                            <div className='flex flex-row gap-5'>
                                <a href='https://github.com/user1871872/GrosspayCalculator'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Front-End</h3></a>
                            </div>
                            <img className='w-full' src='images/porfolio4.jpg' alt='' />
                            <h3 className='tracking-widest text-xs font-medium title-font'>Javascript</h3>
                            <button className='w-full bg-blue-500 p-3 mt-3'>View Project</button>
                        </div>
                    </div>

                    <div className='xl:w-1/3 md:w-1/4 p-4'>
                        <div className='p-6 items-center border overflow-hidden group shadow-2xl'>
                            <p className='text-lg'>Number To Words</p>
                            Source code:
                            <div className='flex flex-row gap-5'>
                                <a href='https://github.com/user1871872/NumberToWords'><h3 className='tracking-widest text-xs font-medium title-font cursor-pointer hover:underline'>Front-End</h3></a>
                            </div>
                            <img className='w-full' src='images/porfolio3.jpg' alt='' />
                            <h3 className='tracking-widest text-xs font-medium title-font'>Javascript</h3>
                            <button className='w-full bg-blue-500 p-3 mt-3'>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
