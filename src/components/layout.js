import React from 'react'
import About from '../pages/about'
// import Contact from '../pages/contactMe'
import Projects from '../pages/projects'

function layout() {
    const screens = [
        { pages: <About />, id: 'about' },
        { pages: <Projects />, id: 'project' },
        // { pages: <Contact />, id: 'contact' },
    ]
    return (
        <div className='container'>
            <div className='layout'>
            {screens.map((page) => (
                <span key={page.id}>
                    {page.pages}
                </span>
            ))}
            </div>
        </div>
    )
}
export default layout
