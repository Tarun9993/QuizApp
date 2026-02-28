import React, { useContext } from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { Navigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from "framer-motion";
const Home = () => {
    const { theme } = useContext(ThemeContext)
    const handleScroll = (id) => {
        if (location.pathname !== "/") {
            Navigate("/");

            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };
    const isDark = theme === "dark"
    return (
        <main>
            <section className="py-24">

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="text-center">
                    <p className={`${isDark ? "border-[#384664]" : "border-neutral-300"} inline-flex items-center gap-2 
        border  
        text-sm font-semibold text-blue-700 
        rounded-full px-4 py-2`}>
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
                            <GoDotFill className="text-blue-600 text-sm relative" />
                        </div>
                        10 Interactive Quizzes Are Live
                    </p>
                </motion.div>

                <motion.div
                          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
                className={` ${isDark ? "border-[#384664]" :"border-neutral-300"}  max-w-2xl text-center mx-auto px-4 py-16 tracking-widest border-b `}>
                    <h1 className={`${isDark ? "text-neutral-300" :"text-[#333334]"} text-2xl text-[#333334] font-bold leading-snug`}>
                        Challenge yourself with engaging quizzes across Data Structures, Algorithms, Operating Systems, Databases, and Computer Networks..
                    </h1>
                    <div className="flex justify-center gap-4 mt-8">
                        <button className="flex items-center  cursor-pointer gap-2 bg-blue-800 
          text-white font-bold py-3 px-6 rounded-xl 
          hover:bg-blue-700 transition" onClick={() => handleScroll("quizzes")}>
                            Start Quiz
                            <GoArrowRight />
                        </button>

                        <button className={`${isDark ? "text-white border-[#384664]" : "border-neutral-300 "} border cursor-pointer 
          font-bold py-3 px-6 rounded-xl 
          hover:bg-[#EC8713] transition`}>
                            View Leaderboard
                        </button>
                    </div>
                </motion.div>

                <motion.div
                          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
                className="flex justify-center gap-16 mt-16">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-[#5838FA]">300+</h2>
                        <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>Questions</p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-[#DB7706]">1k+</h2>
                        <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>Players</p>
                    </div>

                    <div className="text-center">
                        <h2 className={` ${isDark ? "text-white" : ""} text-4xl font-bold`}>50+</h2>
                        <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>Contributors</p>
                    </div>
                </motion.div>

            </section>
        </main>
    )
}

export default Home

