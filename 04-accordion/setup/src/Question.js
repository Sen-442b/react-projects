import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({item}) => {
  const {title,info}=item
  const [displayProp,setDisplayProp]=useState("none")
  function setDisplayProperty(){
    setDisplayProp((prevState)=>{
      console.log(prevState)
      return prevState==="block"?"none":"block"
    })

  }
  console.log(item)
  return <article className="question">
    <header>
    <h4>{title}</h4>
    <button className="btn" onClick={setDisplayProperty}>{displayProp==="block"?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
    <p style={{display:displayProp}}>{info}</p>

  </article>;
};

export default Question;
