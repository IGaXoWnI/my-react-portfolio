import React from "react"
import "./Home.css"
import hero from "../../images/img1.jpg"
import skill1 from "../../images/react.png"
import skill2 from "../../images/hardware.png"
import skill3 from "../../images/figma.png"
import instagram from './../../images/instagram.png'
import linkedin from './../../images/linkedin.png'
import github from './../../images/github.png'
import { Typewriter } from "react-simple-typewriter"





const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top' data-aos="fade-right" data-aos-duration="2000">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Ismail Baguni</span>
            </h1>
            <h2>
              <span>
                <Typewriter words={["Junior Web Developer|.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

              <p>I have a passion for computer programming and information technology. I went through computer programming two years ago. This passion has given me the ability to learn some programming languages. I am open to learning new things and getting involved.</p>
            
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>

                <div className='social_btn'>

                  <button className='btn_shadow'>
                  <a href="https://www.instagram.com/baguni_ismail/?hl=fr" target='_blank'><img src={instagram} alt=''/></a> 
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/ismail-baguni-470810230/" target='_blank'><img src={linkedin} alt=''/></a> 
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://github.com/IGaXoWnI" target='_blank'><img src={github} alt=''/></a> 
                  </button>

                </div>

              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <div className="skills_btn">
                  <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className='right' data-aos="fade-left" data-aos-duration="2000">
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
