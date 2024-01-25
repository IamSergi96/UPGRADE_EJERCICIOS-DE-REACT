import React from 'react'
import { data } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTShirt } from '@fortawesome/free-solid-svg-icons'

function Color() {
  return (
    <div className='Color'>
        {data.product.colors.map((item, index)=>
        <div key={index}>
            <div className='colortype'>
                <p>{item}</p><FontAwesomeIcon icon={faTShirt}></FontAwesomeIcon>
            </div>
        </div>
        )}
    </div>
    
  )
}

export default Color