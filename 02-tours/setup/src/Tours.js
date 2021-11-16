import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ props,removeItem }) => {
  console.log(removeItem);
  // const [remove,setRemove]=useState(false)
 
  return (
    <section>
      <div className="title">
        <h2>Available Tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {props.map((item) => {
          return <Tour key={item.id} {...item} removeItem={removeItem}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
