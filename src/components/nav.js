import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
export default function Navbar() {

  const [nav, setNav] = useState('navBar');

  const handleNav = () => {
    setNav(!nav)
  }

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // const handleclickHome = () => {
  //   const element = document.getElementById('home')
  //   if(element){
  //     element.scrollIntoView({behavior: 'smooth'})
  //   }
  // }
  const handleclickAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleclickProject = () => {
    const element = document.getElementById('project')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleclickContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='text-white uppercase'>
      <header className='bg-black p-5 fixed w-full'>
        <nav className='flex justify-between items-center'>
          <Link to='/'><h1 className='mr-auto text-2xl flex justify-between' onClick={scrolltoTop}>My portfolio</h1></Link>
          <ul className='flex flex-wrap gap-5 text-lg px-5'>
            <li className='hover:underline md:flex hidden cursor-pointer' onClick={scrolltoTop}>Home</li>
            <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleclickAbout}>About</li>
            <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleclickProject}>Projects</li>
            <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleclickContact}>Contact</li>
          </ul>

          <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <div className={!nav ? "fixed left-0 top-[70px] w-[80%] h-full bg-yellow-500 ease-in-out duration-500" : "fixed left-[-100%]"}>
            <header className='text-white mt-5 mx-10'>
              <nav>
                <ul className='flex flex-col gap-5 text-lg'>
                  <li className='hover:underline' onClick={scrolltoTop}>Home</li>
                  <li className='hover:underline' onClick={handleclickAbout}>About</li>
                  <li className='hover:underline' onClick={handleclickProject}>Projects</li>
                  <li className='hover:underline' onClick={handleclickContact}>Contact</li>
                </ul>
              </nav>
            </header>
          </div>

        </nav>

      </header>


    </div>
  )
}
