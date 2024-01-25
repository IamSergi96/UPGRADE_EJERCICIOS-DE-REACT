import React from 'react'
import { data } from '../Data'

function Header() {
  return (
    <div className='Header'>
        <img src={data.header.logo} alt="logo"/>
        <div className='div'>
        {data.header.links.map((item, index)=>
        <div className='divLinks' key={index}>
            <a href={item.url}>{item.text}</a>
        </div>
            )}
        </div>
        <div className='div2'>
        {data.header.menu.map((item, index)=>
        <div className='divMenu' key={index}>
            <p>{item.text}</p>
            <img src={item.url} alt={item.text}/>
        </div>
            )}
        </div>
    </div>
  )
}

export default Header