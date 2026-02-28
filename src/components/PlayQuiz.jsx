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
    <div>
      <div className='max-w-[60%] mx-auto px-10 py-5'>

        <div>
          <p className={`${isDark ? "text-white" : "text-black"} font-bold`}>Q.{currentIndex + 1}</p>

          <div className='inline-block rounded-full px-5 my-5 p-1 border border-neutral-200'>
            <MdAccessTime
              size={20}
              className={`inline-block ${timeLeft <= 3 ? "text-red-500" : "text-green-600"}`}
            />
            <span className={`pl-2 font-bold ${timeLeft <= 3 ? "text-red-500" : "text-green-600"}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        <div className={`${isDark
          ? "bg-[#141F38] border-[#384664] text-white"
          : "bg-white border-neutral-300"
          } border rounded-xl shadow-xl text-center py-10 px-5`}>

          <h1 className="font-bold text-2xl tracking-wider py-5">
            {currentQuestion.question}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">

            {currentQuestion.options.map((option, index) => {

              const serialNo = index + 1

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
                      ? "border-2 border-blue-600 bg-blue-400"
                      : ""
                    }
                    shadow-md border text-lg cursor-pointer rounded-xl p-6 w-full text-left
                    transition duration-200 ease-in-out
                  `}
                >
                  {serialNo}. {option}
                </button>
              )
            })}
          </div>
        </div>

        <div className='text-right p-3'>
          <button
            type='button'
            onClick={handleNext}
            className="font-bold px-6 py-3 bg-[#155DFC] text-white rounded-xl cursor-pointer"
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