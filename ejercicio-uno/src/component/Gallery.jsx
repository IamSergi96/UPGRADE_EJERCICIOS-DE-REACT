import React from 'react'
import { data } from '../Data'
function Gallery() {

  return (
    <div className='div'>
            {data.gallery.map((item, index)=>
                <div className='divCard' key={index}>
                    <img src={item.card.img} alt={item.card.title}/>
                    <div className='divDiscount'><p>{item.card.discount}</p></div>
                    <div className='divNamePrice'>
                        <h3>{item.card.title}</h3>
                        <p>{item.card.price}</p>
                    </div>
                </div>
            
           )
          }        
    </div>
  )
}

export default Gallery