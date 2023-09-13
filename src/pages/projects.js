import React from 'react'

export default function projects() {
    return (
        <div className='container'>
            <div className='p-6 z-10 m-auto '>

                <h1 className='font-bold text-2xl ml-16'>Projects</h1>

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
                <div className='flex flex-row p-5 items-center pt-10 w-fit m-10'>
                    <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/shopee1.png' alt='' />
                    <p className=''>
                        Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
                        We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br />
                        <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
                    </p>
                    <img className='w-1/2' src='images/shopeeimage.jpg' alt='' />

                </div>

                <div className='flex flex-row p-5 items-center pt-10 w-fit m-10'>
                    <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/lazada2.jpg' alt='' />
                    <p>
                        Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
                        We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br />
                        <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
                    </p>
                    <img className='w-1/2' src='images/lazadaimage.jpg' alt='' />

                </div>

                <div className='flex flex-row p-5 items-center pt-10 w-fit m-10w-fit m-10'>
                    <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/palawan.png' alt='' />
                    <p>
                        Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
                        We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br />
                        <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
                    </p>
                    <img className='w-1/2' src='images/palawanImage.jpg' alt='' />

                </div>


            </div>
        </div>
    )
}
