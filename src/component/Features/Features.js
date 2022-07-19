import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top canido' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>What Can I Do</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Features