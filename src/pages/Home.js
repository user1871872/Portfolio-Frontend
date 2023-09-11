import React from 'react'
export default function Home() {
  return (
    <div className='uppercase'>
      {/* about */}
      <div className='flex mx-auto justify-center bg-white text-black  pb-40 relative border'>
        <div className='flex flex-row  md:flex flex-wrap place-items-center p-16 pt-40' >
          <div className='text-center'>
            <span className='flex'><p className='font-semibold text-3xl'>full stack developer</p>
            <img className='w-12 h-12 rounded-full float-right' src='images/fulls.png' alt='' />
            </span>
            <p className='font-medium'> arben joseph m. felisarta<br />
             </p>
             <img className='' src='images/full.png' alt=''/>  <img className='' src='images/full.png' alt=''/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Contact Me</button>
  
            <div className='w-10 rounded-sm flex gap-3 mt-5 border bg-inherit m-6'>
              <img src='images/react.png' alt='' />
              <img src='images/php.png' alt='' />
              <img src='images/mysql.png' alt='' />
              <img src='images/html.png' alt='' />
              <img src='images/js.png' alt='' />
              <img src='images/css.png' alt='' />
              
         
            </div>

            {/* <div className='w-10 rounded-sm flex mx-auto gap-3 mt-5 relative float-right'>
              <img src='images/face.png' alt='' />
              <img src='images/insta.png' alt='' />
              <img src='images/twit.png' alt='' />
            </div> */}

          </div>
        </div>
        <div className='w-fit bg-inherit ml-36'>
            <img src='images/orig.png' alt='' />
          </div>
      </div>

      {/* Projects */}
      <div className='p-6 z-10 m-auto '>

        <h1 className='text-center font-bold text-2xl'>Projects</h1>

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
        <div className='flex flex-row p-5 items-center pt-10 w-fit m-10 border'>
          <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/shopee1.png' alt='' />
          <p className=''>
            Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
            We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br/>
            <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
          </p>
          <img className='w-1/2' src='images/shopeeimage.jpg' alt='' />
          
        </div>
  
        <div className='flex flex-row p-5 items-center pt-10 w-fit m-10 border'>
          <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/lazada2.jpg' alt='' />
          <p>
            Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
            We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br/>
            <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
            </p>
          <img className='w-1/2' src='images/lazadaimage.jpg' alt='' />

        </div>

        <div className='flex flex-row p-5 items-center pt-10 w-fit m-10w-fit m-10 border'>
          <img className='w-20 h-20 mr-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300' src='images/palawan.png' alt='' />
          <p>
            Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
            We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.<br/>
            <button className='float-right mr-20 bg-slate-500 rounded-sm text-white'>Open live</button>
            </p>
          <img className='w-1/2' src='images/palawanImage.jpg' alt='' />

        </div>


      </div>
      {/* contact */}
      <div className='border shadow-md p-10 bg-slate-300 w-72 m-10 rounded-md '>
        <div className='flex flex-col'>
          Name:
          <input type='text'></input>

          Last Name:
          <input type='text'></input>

          Contact:
          <input type='text'></input>

          Address:
          <input type='text'></input>
        </div>
      </div>

    </div>

  )
}
