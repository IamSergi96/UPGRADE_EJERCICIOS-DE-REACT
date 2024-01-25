import React from "react";
import { data } from "../Data";
import './Promotion.css'



function Promotion() {
  return (
    <div className="promotion">
      <p>{data.promotion.day}</p>
      <h1>{data.promotion.title}</h1>
      <div className="div1">
      <h1>{data.promotion.price}</h1>
        <div className="div2">
          <p>{data.promotion.discount}</p>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
