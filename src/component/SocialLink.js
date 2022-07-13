import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi";

const socialLink = () => {
    const links = [  
        {
            id:1,
            child : (
                <>
                LinkdIn <FaLinkedin className='ml-8' size={20} />
            </>
            ),
            href:"https://linkedin.com/in/sourav-kar-4387ba209",
            style: "rounded-tr-md"

        },
        {
            id:2,
            child : (
                <>
                GitHub <FaGithub className='ml-8' size={20} />
            </>
            ),
            href:"https://github.com/Souravkar98",

        },
        {
            id:3,
            child : (
                <>
                Mail <HiOutlineMail className='ml-8' size={20} />
            </>
            ),
            href:"mailto:foo@gmail.com",
            
        },
        {
            id:4,
            child : (
                <>
                Resume <BsFillPersonLinesFill className='ml-8' size={20} />
            </>
            ),
            href:"/resume.pdf",
            style: "rounded-br-md",
            download: true,


        },

    ]
    return (
        <div className="flex flex-col top-[35%] left-0 fixed ">
            <ul>
                {
                    links.map(({id,child,href,style,download})=>(
                        <li
                        key={id}
                         className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}> 
                        <a href={href} 
                        className='flex justify-center items-center w-full text-white'
                        download={download}
                        target='_blank'
                        rel='noreferrer'>
                            {child}
                        </a> 
                        </li>
                    ))}                
            </ul>
        </div>
    )
}

export default socialLink
