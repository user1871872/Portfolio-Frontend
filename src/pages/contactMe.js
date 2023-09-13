import React from 'react'

function contactMe() {
  return (
        <div className='container'>
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

export default contactMe