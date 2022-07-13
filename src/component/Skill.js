import React from 'react';
import react from '../assets/react.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import express from '../assets/express.png';
import redux from '../assets/redux.png'

const Skill = () => {
    const skills = [
        {
            id: 1,
            src: javascript,
            name: 'JavaScript',
            style: ' mt-3',
            shadow: "shadow-yellow-500",

        },
        {
            id: 2,
            src: react,
            name: 'React Js',
            style: ' mt-3',
            shadow : "shadow-blue-600",

        },
        {
            id: 3,
            src: node,
            name: 'Node Js',
            style: ' mt-3',
            shadow: "shadow-emerald-500"
                    

        },
        {
            id: 4,
            src: express,
            name: 'Express Js',
            style: ' mt-3',
            shadow: "shadow-white",
        },
        {
            id: 5,
            src: mongodb,
            name: 'MongoDB',
            style: ' mt-14',
            shadow:"shadow-emerald-500"

        },
        {
            id: 6,
            src: redux,
            name: 'Redux/Toolkit',
            style: ' mt-3',
            shadow: "shadow-gray-400",

        },
    ]
  return (
    <div
      name="Skill"
      className=' bg-gradient-to-b  from-gray-800 to-black text-white w-full md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-8'>This are the technologies I've worked with</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-6'>
        {
            skills.map(({id,src,name,style,shadow})=>(
                <div key={id} className={ `shadow-md ${shadow} rounded-lg`}>
                <img src={src} alt="" className=' w-40 mx-auto rounded-md duration-200 hover:scale-105' />
                <p className={`m-auto flex items-center justify-center ${style}`}>{name}</p>
                </div>
            ))
        }

            

        </div>
      </div>
    </div>
  )
}

export default Skill
