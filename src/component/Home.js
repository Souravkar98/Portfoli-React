import React from 'react'
import heroImage from "../assets/heroImage.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Diligent Software Developer with 1 year 5 months experience in software engineering and working in DXC company having exposure of both technical and financial aspects of the work . Eager to join tech-driven company to learn new skills and build innovative and cutting edge business solutions for impressive suite of customers within it's global reach .
          </p>
          <div>
            <Link to="Project" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >Project
              <span className=' group-hover:rotate-90 duration-300'>
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className='mb-12'>
          <img src={heroImage} alt="my Profile" className="rounded-2xl ml-4 mx-auto w-2/3 md:w-full" />
        </div>
      </div>

    </div>
  )
}

export default Home
