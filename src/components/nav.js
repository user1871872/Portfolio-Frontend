import React from 'react'
import { Link } from 'react-router-dom'
export default function header() {
  return (
    <div className='text-white uppercase'>
      <header className='bg-black p-5'>
        <nav className=''>
          <ul className='flex flex-wrap gap-5 text-lg px-5'>

            <h1 className='mr-auto text-2xl'>My portfolio</h1>

            <Link to="/"> <li className='hover:underline'>Home</li></Link>
            <Link to="about"> <li className='hover:underline'>About</li></Link>
            <Link to='project'><li className='hover:underline'>Projects</li></Link>
            <Link to="contactMe"> <li className='hover:underline'>Contact</li></Link>
          </ul>
        </nav>

      </header>


    </div>
  )
}
