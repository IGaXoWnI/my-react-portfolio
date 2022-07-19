import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow' data-aos="fade-up" data-aos-duration="1000">
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
