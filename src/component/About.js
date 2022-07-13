import React from 'react'

const About = () => {
  return (
    <div
    name="About"
    className=' h-screen bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>WORK EXPERIENCE</p>
        </div>
        <div className='flex content-between '>
        <p className='text-4xl mt-10 font-bold'>DXC Technology</p>
        <p className='mt-8 ml-5 pt-5 text-xs'>Hyderabad, India</p>
        </div>

        <p className='text-2xl mt-3 font-bold'>Associate Professional Software Engineer</p>
        <p className='mt-1'>01/2021 - Present</p>
        <p className='mt-1 text-xs'>The company have the leading IT services platform, that helps with the power of technology to build better futures for customers to live better financial lives through innovative servies.</p>

        <br />
        <div className='mt-5'>
        <li className='mb-3'>I have been working here in Mainframe as back end developer where my primary root cause analysis, code development, unit testing , migrate the changes in production and provide post deployment support.</li>
        <li className='mb-3'>Having some experience in Frontend Development where we use basic of HTML, CSS and JavaScript.</li>
        <li className='mb-3'>Having some experience in Frontend Development where we use basic of HTML, CSS and JavaScript.</li>
        <li className='mb-3'>Helped team to migrate from Internet Explorer to Microsoft Edge</li>
        <li className='mb-3'>I have been working in Agile Methodology and do hands on Jira and Confluence.</li>
        </div>

      </div>

    </div>
  )
}

export default About
