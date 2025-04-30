import React from 'react'

function About(props) {
const defaultSrc="https://via.placeholder.com/215"
  return (
    <div>
    <aside>
      <img src= {props.image ? props.image:defaultSrc}  alt='blog logo' />
        <p>{props.about}</p>
        </aside>
    </div>
  )
}

export default About