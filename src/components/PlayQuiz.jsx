import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quizzes } from "../data"
import { MdAccessTime } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';

const PlayQuiz = () => {

  const { id } = useParams()
  const quizId = Number(id);
  const quiz = quizzes.find(q => q.id === quizId)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)

  if (!quiz) return <h2>Quiz Not Found</h2>

  const currentQuestion = quiz.questions[currentIndex]
  const isDark = theme === "dark";


  useEffect(() => {

    if (timeLeft === 0) {
      handleNext()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)

  }, [timeLeft])

  useEffect(() => {
    setTimeLeft(10)
    setSelectedOption(null)
  }, [currentIndex])


  const handleClick = (serialNo) => {
    setSelectedOption(serialNo)   // Only store selection
  }

  const handleNext = () => {

    const isCorrect =
      selectedOption !== null &&
      currentQuestion.correctAnswer === selectedOption - 1

    const updatedScore = isCorrect ? score + 1 : score

    if (currentIndex === quiz.questions.length - 1) {

      navigate("/result", {
        state: {
          score: updatedScore,
          total: quiz.questions.length
        }
      })

      return
    }

    setScore(updatedScore)
    setCurrentIndex(prev => prev + 1)
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-3xl mx-auto py-5">

    {/* Question Number + Timer */}
    <div className="flex justify-between items-center flex-wrap gap-3">
      <p className={`${isDark ? "text-white" : "text-black"} font-bold`}>
        Q.{currentIndex + 1}
      </p>

      <div className="flex items-center rounded-full px-4 py-1 border border-neutral-200">
        <MdAccessTime
          size={20}
          className={`${timeLeft <= 3 ? "text-red-500" : "text-green-600"}`}
        />
        <span className={`pl-2 font-bold ${timeLeft <= 3 ? "text-red-500" : "text-green-600"}`}>
          {timeLeft}s
        </span>
      </div>
    </div>

    {/* Question Card */}
    <div
      className={`${
        isDark
          ? "bg-[#141F38] border-[#384664] text-white"
          : "bg-white border-neutral-300"
      } border rounded-xl shadow-xl text-center py-8 sm:py-10 px-4 sm:px-6 mt-5`}
    >
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide py-4">
        {currentQuestion.question}
      </h1>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">

        {currentQuestion.options.map((option, index) => {
          const serialNo = index + 1;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(serialNo)}
              className={`
                ${isDark
                  ? "bg-[#1D283A] border-neutral-800"
                  : "bg-[#F1F5F9] border-neutral-200"
                }
                ${selectedOption === serialNo
                  ? "border-2 border-blue-600 bg-blue-400 text-white"
                  : ""
                }
                shadow-md border text-base sm:text-lg cursor-pointer rounded-xl p-4 sm:p-6 w-full text-left
                transition duration-200 ease-in-out
              `}
            >
              {serialNo}. {option}
            </button>
          );
        })}

      </div>
    </div>

    <div className="text-right mt-6">
      <button
        type="button"
        onClick={handleNext}
        className="font-bold px-5 sm:px-6 py-2 sm:py-3 bg-[#155DFC] text-white rounded-xl cursor-pointer hover:scale-105 transition"
      >
        {currentIndex === quiz.questions.length - 1
          ? "Check Result"
          : "Next Question"}
      </button>
    </div>

  </div>
</div>
  )
}

export default PlayQuiz