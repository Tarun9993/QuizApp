import React, { useContext } from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === "dark";

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <section className="py-20 md:py-24 px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p
            className={`${
              isDark ? "border-[#384664]" : "border-neutral-300"
            } inline-flex items-center gap-2 border text-sm font-semibold text-blue-700 rounded-full px-4 py-2`}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
              <GoDotFill className="text-blue-600 text-sm relative" />
            </span>
            10 Interactive Quizzes Are Live
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${
            isDark ? "border-[#384664]" : "border-neutral-300"
          } max-w-2xl mx-auto text-center py-16 border-b`}
        >
          <h1
            className={`${
              isDark ? "text-neutral-300" : "text-[#333334]"
            } text-lg md:text-2xl font-bold leading-snug`}
          >
            Challenge yourself with engaging quizzes across Data Structures,
            Algorithms, Operating Systems, Databases, and Computer Networks.
          </h1>

          <div className="flex justify-center flex-wrap gap-4 mt-8">

            <button
              onClick={() => handleScroll("quizzes")}
              className="flex items-center gap-2 bg-blue-800 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
            >
              Start Quiz
              <GoArrowRight />
            </button>

            <button
              onClick={() => navigate("/leaderboard")}
              className={`${
                isDark ? "text-white border-[#384664]" : "border-neutral-300"
              } border font-bold py-3 px-6 rounded-xl hover:bg-[#EC8713] transition`}
            >
              View Leaderboard
            </button>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto flex justify-around flex-wrap md:gap-16 mt-16 text-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5838FA]">
              300+
            </h2>
            <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>
              Questions
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#DB7706]">
              1k+
            </h2>
            <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>
              Players
            </p>
          </div>

          <div>
            <h2
              className={`${
                isDark ? "text-white" : "text-black"
              } text-3xl md:text-4xl font-bold`}
            >
              50+
            </h2>
            <p className={`${isDark ? "text-neutral-200" : "text-neutral-600"}`}>
              Contributors
            </p>
          </div>
        </motion.div>

      </section>
    </main>
  );
};

export default Home;