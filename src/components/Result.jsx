import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";
import { ThemeContext } from '../context/ThemeContext';
import { motion } from "framer-motion";
const Result = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const{theme} = useContext(ThemeContext)

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location, navigate]);

  const { score = 0, total = 0 } = location.state || {};

  const wrongAnswers = total - score;

  const accuracy = total > 0
    ? Math.round((score / total) * 100)
    : 0;

    const isDark = theme === "dark"

  return (
    <div>
      <section>

        <div className="flex items-center justify-center my-15">
          <div className={` ${isDark ? "text-white border-[#384664]" : "text-black border-neutral-300"} py-2 px-5 border  rounded-full flex items-center gap-2`}>
            <span className="text-lg inline-block">
              <FiCheckCircle />
            </span>
            <p className="text-sm font-semibold">
              Quiz Completed!
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='text-center px-4'>
            <p className={`${isDark ? "text-neutral-400" : " text-neutral-700"} text-lg`}>
            You scored better than 72% of all players
           </p>
        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className={`${isDark ? "bg-[#141F38] border-0" : "bg-white border border-neutral-200"} space-y-4 py-4 my-10 0 max-w-xs w-full mx-auto flex flex-col  rounded-xl justify-center items-center`}>
          <p className={`${isDark ? "text-neutral-400" : "text-neutral-900"} text-[1.1rem] font-bold`}>
            Final Score
          </p>
          <h1 className='text-5xl text-yellow-500 font-bold'>
            {score}
          </h1>
          <p className={`${isDark ? "text-neutral-400" : "text-neutral-700"} font-semibold`}>
            out of {total} points
          </p>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className='flex flex-col sm:flex-row flex-wrap justify-center max-w-3xl mx-auto p-4 gap-6'>

          <div className={`${isDark ? "bg-[#141F38] border-0" : "border-neutral-300"} border  rounded-xl shadow px-8 sm:px-20 py-2 w-full sm:w-auto text-center`}>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-2xl py-2 font-semibold`}>{score}</h1>
            <p className={`${isDark ? "text-neutral-400" : "text-neutral-700"}`}>correct</p>
          </div>

          <div className={`${isDark ? "bg-[#141F38] border-0" : "border-neutral-300"} border  rounded-xl shadow px-8 sm:px-20 py-2 w-full sm:w-auto text-center`}>
            <h1 className='text-2xl py-2 text-red-500 font-semibold'>
              {wrongAnswers}
            </h1>
            <p className={`${isDark ? "text-neutral-400" : "text-neutral-700"}`}>wrong</p>
          </div>

          <div className={`${isDark ? "bg-[#141F38] border-0" : "border-neutral-300"} border  rounded-xl shadow px-8 sm:px-20 py-2 w-full sm:w-auto text-center`}>
            <h1 className={`${isDark ? "text-white" : "text-black"} text-2xl py-2 font-semibold`}>
              {accuracy}%
            </h1>
            <p className={`${isDark ? "text-neutral-400" : "text-neutral-700"}`}>Accuracy</p>
          </div>

        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
         className='flex flex-col sm:flex-row py-5 justify-center items-center gap-4 sm:gap-5'>

          <div className={`${isDark ? "border-[#384664]" : "border-neutral-300"} border  cursor-pointer bg-blue-600 hover:scale-105 transition duration-200 text-white font-semi-bold rounded-xl px-10 py-2 shadow text-center flex justify-center items-center gap-1 w-full sm:w-auto`}>
            <span><FaArrowRotateLeft /></span>
            <p>Play Again</p>
          </div>

          <div className={`${isDark ? "border-[#384664] text-white" : "border-neutral-300"} border  cursor-pointer rounded-xl shadow px-10 py-2 text-center hover:scale-105 transition duration-200 hover:bg-yellow-500 flex justify-center items-center gap-1 w-full sm:w-auto font-semibold`}>
            <span><CiHome /></span>
            <p>Go to Home</p>
          </div>

          <div className={` ${isDark ? "border-[#384664]" : "border-neutral-300"} border  cursor-pointer rounded-xl shadow px-10 py-2 text-center flex justify-center items-center gap-1 text-[#DB7706] hover:scale-105 transition duration-200 w-full sm:w-auto font-bold`}>
            <span><IoShareOutline /></span>
            <p>Share Score</p>
          </div>

        </motion.div>

      </section>
    </div>
  )
}

export default Result