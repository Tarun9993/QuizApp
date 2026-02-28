import React, { useContext } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { ThemeContext } from '../context/ThemeContext'
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Footer = () => {
    const {theme} = useContext(ThemeContext)
    const isDark = theme == "dark"
  return (
    <div className={`${isDark ? "bg-[#141F38]" : "text-[#FFFFFF]"} border-t border-neutral-300`}>
      <footer className='max-w-7xl mx-auto px-6 py-10'>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-10">
        <div className='items-start flex flex-col gap-3 max-w-sm'>
        <div className={`${isDark ? "text-white" : "text-black"} flex items-center gap-2 cursor-pointer`} >
            <FiCheckCircle size={34} className={`${isDark ?"bg-[#4064F3] text-white" : "bg-blue-600 text-white"}border p-1 e rounded-lg `} />
            <h2 className={` ${isDark ? "text-white" : "text-black"} text-xl font-bold `}>QuizMaster</h2>
        </div>
            <p className={`${isDark ? "text-gray-700 dark:text-gray-400" : "text-neutral-700"} leading-relaxed`} >Interactive quiz platform to test and improve your knowledge across multiple categories. Built with React, Tailwind Css.</p>
        </div>
        <div className='space-y-2'>
            <h2 className={`${isDark ? 'text-white' : "text-black"} font-bold`}>Quick Links</h2>
            <ul className={`${isDark ? 'text-neutral-400' : "text-neutral-700"} `}>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>Home</li>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>Quizzes</li>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>LeaderBoard</li>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>Admin</li>
            </ul>
        </div>
        <div className='space-y-2'>
            <h2 className={`${isDark ? 'text-white' : "text-black"} font-bold`}>Resources</h2>
            <ul className={`${isDark ? 'text-neutral-400' : "text-neutral-700"} `}>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>Documentation</li>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>GitHub</li>
                <li className='cursor-pointer hover:text-blue-600 transform transition duration-300'>Support</li>
            </ul>
        </div>
        </div>
        <div className={`${isDark ? "text-neutral-400" : "text-neutral-700"} border-t border-t-[#384664] pt-5 pb-16 flex justify-between items-center `}>
            <p>© 2025 QuizMaster. All rights reserved.</p>
            <div className='flex gap-4'>
                <FaLinkedinIn size={20} className='cursor-pointer hover:text-blue-600 transform transition duration-300'/>
                <IoLogoGithub size={20} className='cursor-pointer hover:text-blue-600 transform transition duration-300'/>
                <FaTwitter size={20} className='cursor-pointer hover:text-blue-600 transform transition duration-300'/>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
