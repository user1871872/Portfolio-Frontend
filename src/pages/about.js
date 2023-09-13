import React from 'react'

function about() {
  return (
    <div>
      {/* about */}
      <div className='flex mx-auto justify-center bg-white text-black  pb-40 relative uppercase'>
        <div className='flex flex-row  md:flex flex-wrap place-items-center p-16 pt-40' >
          <div className='text-center'>
            <span className='flex'><p className='font-semibold text-4xl'>full stack developer</p>
              <img className='w-12 h-12 rounded-full float-right' src='images/fulls.png' alt='' />
            </span>
            <p className='font-medium text-lg'> arben joseph m. felisarta<br />
            </p>
            <img className='' src='images/full.png' alt='' />  <img className='' src='images/full.png' alt='' />
            <div className='w-10 rounded-sm flex gap-3 mt-5 border bg-inherit m-6'>
              <img src='images/react.png' alt='' />
              <img src='images/mongo.png' alt='' />
              <img src='images/tailwind.png' alt='' />
              <img src='images/php.png' alt='' />
              <img src='images/mysql.png' alt='' />
              <img src='images/html.png' alt='' />
              <img src='images/js.png' alt='' />
              <img src='images/css.png' alt='' />
             
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 flex items-center mx-auto'>
            <img src='/images/messengerIcon.png' alt=''/>
            Messenger
            </button>
            {/* <div className='w-10 rounded-sm flex mx-auto gap-3 mt-5 relative float-right'>
              <img src='images/face.png' alt='' />
              <img src='images/insta.png' alt='' />
              <img src='images/twit.png' alt='' />
            </div> */}

          </div>
        </div>
        <div className='w-fit bg-inherit ml-36 items-center'>
          <img className='shadow-md rounded-full' src='images/orig.png' alt='' />
        </div>
      </div>
    </div>

  )
}

export default about