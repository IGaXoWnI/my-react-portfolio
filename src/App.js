import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Resume from "./component/Resume/Resume"
import Blog from "./component/Projects/Blog"
import Contact from "./component/Contact/Contact"
import Footer from './component/Footer/Footer';
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Resume />
      <Blog />
      <Contact />
      <Footer/>
      
    </>
  )
}

export default App
