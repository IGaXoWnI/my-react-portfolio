import React, { useState } from "react"
import contact from "./../../images/contact.svg"
import instagram from './../../images/instagram.png'
import linkedin from './../../images/linkedin.png'
import github from './../../images/github.png'
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top' data-aos="fade-up" data-aos-duration="1000">
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left' data-aos="fade-right" data-aos-duration="2000">
              <div className='box box_shodow'>
                <div className='imgilu'>
                  <img className="ilustrator" src={contact} alt='' />
                </div>
                <div className='details'>
                  <h1>Ismail Baguni</h1>
                  <p>if you have any questions please do not hesitate to contact .</p> <br />
                  <p>Phone: +212674625624</p>
                  <p>Email: igaxowni@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <div className="contact_btn">
                      <button className='btn_shadow'>
                    <a href="https://www.instagram.com/baguni_ismail/?hl=fr" target="blank"><img className="socialbtn" src={instagram} alt='' /></a>
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/in/ismail-baguni-470810230/" target='_blank' ><img className="socialbtn" src={linkedin} alt='' /></a> 
                    </button>
                    <button className='btn_shadow'>
                    <a href="https://github.com/IGaXoWnI" target='_blank'><img className="socialbtn" src={github} alt='' /></a> 
                    </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow' data-aos="fade-left" data-aos-duration="2000">
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
