import React from 'react'
import { data } from '../Data'

function Sizes({sizes}) {
  return (
    <div className='Sizes'>
        {data.product.sizes.map((item, index)=>
        <div key={item}>
            <h3>{item.sizes.name}{item.sizes.qty}</h3>
        </div>
        )}
    </div>
  )
}

export default Sizes