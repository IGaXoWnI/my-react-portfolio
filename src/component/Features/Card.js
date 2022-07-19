import React from "react"

const Card = (props) => {
  return (
    <div className="canido" data-aos="fade-right" data-aos-duration="2000">
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </div>
  )
}

export default Card
