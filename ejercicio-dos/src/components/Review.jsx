import React from 'react'
import { data } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Review() {
  return (
    <div className='div'>
        {data.reviews.map((item,index)=>
        <div className='divReview' key={index}>
            <img src={item.review.avatar} alt="avatar"/>
            <div>
            <h3>{item.review.rating}</h3><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <h3>{item.review.title}</h3>
            <p>{item.review.date}</p>
        </div>
            )}
    </div>
  )
}

export default Review