import React, { useState } from 'react';

const Tour = ({id,name,image,info,price,removeItem}) => {
 

 

  const [readMoreVar, setReadMoreVar]=useState(false)


  
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info"> 
    <h4>{name}</h4>
    <h4 className="tour-price">{price}</h4>
  
    </div>
    <p >{readMoreVar?info:info.substring(0,150)} <button onClick={()=>setReadMoreVar(!readMoreVar)}>{readMoreVar?"...Read Less":"...Show More"}</button></p>

    
    <button className="delete-btn" onClick={()=>removeItem(id)}>Remove Item</button>
    </footer>
    </article>
  )
    
    
    


  ;
};

export default Tour;
