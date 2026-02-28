import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Quizzes from './components/Quizzes'
import PlayQuiz from './components/PlayQuiz'
import { Routes, Route, useLocation } from 'react-router-dom'
import Result from './components/Result'
import { ThemeContext } from './context/ThemeContext'
import Footer from './components/footer'

const App = () => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext); 
  return (
    <div  className={`${theme === "light" ? "bg-[#F8FAFC] " : "bg-[#0F1729]"} min-h-screen`} >
      <Navbar />
      
      {location.pathname === "/" && (
        <>
          <section id="home"  className="scroll-mt-24">
            <Home />
          </section>

          <section id="quizzes"  className="scroll-mt-24">
            <Quizzes />
          </section>
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/quiz/:id" element={<PlayQuiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
      
    </div>
  )
}

export default App
