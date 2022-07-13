import React from 'react'
import blog from '../assets/portfolio/blog.jpeg';
import newapi from '../assets/portfolio/newapi.jpeg';
import portfolio from '../assets/portfolio/portfolio.webp';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
    },
    {
      id: 2,
      src: newapi,
    },
    {
      id: 3,
      src: portfolio,
    },
  ]
  return (
    <div
      name="Project"
      className=' bg-gradient-to-b from-black to-gray-800 text-white  w-full md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
          <p className='py-8'>Check out some work right here</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6'>


            {
              portfolios.map(({ id, src }) => (       
                   <div key={id} className=' shadow-md shadow-gray-600 rounded-lg '>
              <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className=' w-1/2 px-6 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className=' w-1/2 px-6 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>))
            }

        </div>
      </div>
    </div>
  )
}

export default Portfolio
