import React from 'react'
import { data } from '../Data'
import Color from './Color'
import Sizes from './Sizes'

function Product() {
    // const cesta = []
    const agregarCesta =()=>{
        console.log("Aqui la logica de agregar a la cesta")
    }
  return (
    <div className='Product'>
        <img src={data.product.img} alt="camiseta"/>
        <div className='Details'>
            <h2>{data.product.title}</h2>
            <Color></Color>
            <Sizes></Sizes>
            <button onClick={agregarCesta}>Añadir a la cesta</button>
        </div>
    </div>
  )
}

export default Product