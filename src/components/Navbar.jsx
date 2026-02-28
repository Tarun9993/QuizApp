import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { GoSun } from "react-icons/go";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";
  return (
    <nav className={`${isDark ? "bg-[#0f172a]/60 border-[#384664]"  : "bg-white/60 border-neutral-200"}  backdrop-blur-lg shadow-sm w-full border-b sticky top-0 z-50 transition-all duration-300`} >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className={`${isDark ? "text-white" : "text-black"} flex items-center gap-2 cursor-pointer`}   onClick={() => navigate("/")}>
            <FiCheckCircle
              size={34}
              className={`${isDark ?"bg-[#4064F3] text-white" : "bg-blue-600 text-white"}border p-1 e rounded-lg `}
            />
            <h2 className="text-xl font-bold">QuizMaster</h2>
          </div>

        <ul className={`${isDark ? "text-[#efefef] flex gap-8 font-bold" : "text-neutral-700 flex gap-8 font-bold" }`}>
          <li  onClick={() => handleScroll("home")}>
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
          </li>

          <li  onClick={() => handleScroll("quizzes")}>
            <a href="#quizzes" className="hover:text-blue-500">
              Quizzes
            </a>
          </li>
        </ul>
        {isDark ? (
          <GoSun
            size={24}
            className="cursor-pointer text-yellow-400"
            onClick={toggleTheme}
          />
        ) : (
          <HiOutlineMoon
            size={24}
            className="cursor-pointer text-gray-800"
            onClick={toggleTheme}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
