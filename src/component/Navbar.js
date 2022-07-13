import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Project'
    },
    {
      id: 4,
      link: 'Skill'
    },
    {
      id: 5,
      link: 'Contact'
    },
  ]
  return (
    <div className='fixed justify-between items-center text-white bg-black w-full px-4 h-20 flex' >
      <div>
        <h1 className='text-5xl font-signature ml-2'>Sourav</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ link, id }) => (
          <li key={id} className='px-4 forn-medium cursor-pointer capitalize hover:scale-110 duration-200'><Link to={link} smooth duration={500}> {link} </Link> </li>))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4  text-gray-500 z-10 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      <div/>
      </div>
      {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ link, id }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
             <Link onClick={()=>{ setNav(!nav) }} to={link} smooth duration={500}>{link}</Link> 
             </li>))}
        </ul>)}
    </div>
  )
}

export default Navbar

