import React, { useContext } from 'react'
import { quizzes } from '../data'
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
const Quizzes = () => {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()
    const handleClick = (index) =>{
        navigate(`/quiz/${index}`)
        console.log(index)
    }
    const isDark = theme === "dark"
  return (
    <>
    <section className='max-w-7xl mx-auto md:py-6'>
        <div className='mx-5'>
            <h1 className={` ${isDark ? "text-white" : ""} font-bold text-xl sm:text-2xl tracking-wider py-1`}>Available Quizzes</h1>
            <p className={`${isDark ? "text-neutral-500" : "text-neutral-700"} text-lg`}>Choose a quiz to test your knowledge</p>
        </div>
        <div className="max-w-7xl mx-auto px-1 py-16">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-9 mx-4'>
            {quizzes.map((item) => {
                return(
                    <div key={item.id} className={` ${isDark ? "bg-[#141F38]" : "bg-[#FFFFFF]"} rounded-xl space-y-1 max-w-[26rem] p-6  shadow-xl hover:scale-105 transform transition duration-300 ease-in-out`}>
                        <div className='flex items-center justify-between'> 
                        <img src={item.img} alt="" className='h-12'/>
                        <p className='text-blue-600 font-bold text-sm'>Questions Available</p>
                        </div>
                        <h1 className={`${isDark ? "text-white" : "text-neutral-600"} font-bold text-lg md:text-xl p-3 tracking-wide`}>{item.quizTitle}</h1>
                        <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} px-3 `}>Test Your Knowledge</p>
                        <div className='px-3 py-2 flex items-center gap-2'>
                            <IoTimeOutline className={`${isDark ? "text-neutral-300" : "text-neutral-600"} `}/>
                            <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} `}>~15 min</p>
                        </div>
                        <button type='button' onClick={() => handleClick(item.id)} className={`${isDark ? "bg-[#533bc9] text-black" : "bg-[#5838FA] text-white"} w-full p-2 rounded-xl font-bold cursor-pointer`}>Play Quiz</button>
                    </div>
                )
            })}
        </div>
        </div>
    </section>
    </>
  )
}

export default Quizzes
