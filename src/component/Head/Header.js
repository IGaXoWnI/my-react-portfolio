import React, { useState } from "react"
import "./header.css"
import logo from './../../images/smail-logo-01.svg'

const Header = () => {
  
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header' data-aos="zoom-out" data-aos-duration="600">
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>

              <li>
                <a href='#Projects'>Projects</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn'>Hire Me</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
