import React from 'react'

function about() {
  return (
    <div className='md:flex-row-reverse md:px-16 lg:px-32 pt-16 md:pt-24 flex flex-col items-center'>
      <div className='md:my-auto md:w-1/2 w-full'>
        <img className='lg:w-[512px] rounded-full border md:w-full mx-auto' src='images/orig.png' alt='' />
        </div>
        <div className='flex flex-col place-items-center uppercase sm:items-center' >
          <span className='flex'><p className='font-semibold text-3xl md:text-5xl md:tracking-tight lg:text-6xl'>Front-End Developer...</p>
            {/* <img className=' rounded-full  w-12 lg:w-14' src='images/fulls.png' alt='' /> */}
          </span>
          <p className='text-lg md:text-2xl md:font-medium lg:text-3xl'> arben joseph m. felisarta<br />
          </p>
          <div className='flex gap-3 mt-5 bg-inherit m-6 justify-center mx-20'>
            <img className='w-5 lg:w-10' src='images/mongo.png' alt='' />
            <img className='w-5 lg:w-10' src='images/react.png' alt='' />
            <img className='w-5 lg:w-10' src='images/tailwind.png' alt='' />
            <img className='w-5 lg:w-10' src='images/php.png' alt='' />
            <img className='w-5 lg:w-10' src='images/mysql.png' alt='' />
            <img className='w-5 lg:w-10' src='images/html.png' alt='' />
            <img className='w-5 lg:w-10' src='images/js.png' alt='' />
            <img className='w-5 lg:w-10' src='images/css.png' alt='' />

          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 flex items-center mx-auto'>
            <img src='/images/messengerIcon.png' alt='' />
            Messenger
          </button>
        </div>
 
    </div>

  )
}

export default about