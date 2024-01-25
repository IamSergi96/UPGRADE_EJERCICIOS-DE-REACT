import React from 'react'
import { data } from '../Data'

function Heading() {
  return (
    <div className='div'>
      <a href={data.heading.url}><h3>{data.heading.text}</h3></a>
    </div>
  )
}

export default Heading