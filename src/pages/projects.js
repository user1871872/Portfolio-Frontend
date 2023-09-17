import React from 'react'

export default function projects() {
    return (
        <div id='project' className='container m-auto pt-14 lg:pt-20'>
            <div className='p-6'>

                <h1 className='font-bold text-3xl m-auto text-center lg:text-left lg:ml-32'>Projects</h1>
                <h3 className='text-lg text-center lg:text-left tracking-tight lg:ml-32'>
                    This is my projects since 2021. I'm trying my best to improve my coding skills and to adopt other programming languages
                </h3>
                <div className='delay-300 duration-500 transition-all flex flex-wrap -m-4 opacity-100 mt-10'>
                    <div className='xl:w-1/3 md:w-1/4 p-4'>
                        <div className='p-6 items-center  border overflow-hidden group shadow-2xl'
                        data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-top"
    
                     
                        >
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

                    <div className='xl:w-1/3 md:w-1/4 p-4'
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-top"
                 
                    >
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

                    <div className='xl:w-1/3 md:w-1/4 p-4'
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-top"
       
                    >
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

                    <div className='xl:w-1/3 md:w-1/4 p-4'
                    data-aos="fade-down" 
                    data-aos-once="true" 
                    data-aos-anchor-placement="top-top"
                 
                    >
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
