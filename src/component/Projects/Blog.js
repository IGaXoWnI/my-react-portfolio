import React from "react"
import "../Portfolio/Portfolio.css"
import "../Projects/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top' data-aos="fade-up" data-aos-duration="2000">
          <div className='heading text-center'>
            <h4>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</h4>
            <h1>Previous Work.</h1>
          </div>

          <div className='content grid' data-aos="fade-up" data-aos-duration="2000">
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
