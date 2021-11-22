 import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex]=useState(0)
  const {id,image,name,title,quote}=data[index]
  useEffect(()=>{
    const updateIndex = setInterval(modifyCurrentIndex,5000)
    return(()=>clearInterval(updateIndex))

  },[index])

  function modifyCurrentIndex(){
    setIndex(prevState=>{
      return getVerifiedIndex(prevState+1)})

   

  }
  function getVerifiedIndex(num){
   console.log(num)
    if(num>data.length-1){
    
   return 0
    }
    if(num<0){
      console.log(num)
     return data.length-1
    }
    return num
 
  }


  const getPrevIndex=()=>{
    setIndex(prevState=>{
      return getVerifiedIndex(prevState-1  )})

  }
  const getNextIndex=()=>{
     setIndex(prevState=>{
       return getVerifiedIndex(prevState+1)})

  }

  return <main>
    

    <div >
      <header>
        <h3>/ Reviews</h3>
        <div className='underline'></div>
      </header>
      <button onClick={getPrevIndex} className="btn"><FiChevronLeft/></button>
   
      <div>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{quote}</p>

      </div>
      <button onClick={getNextIndex}  className="btn"><FiChevronRight/></button>
    </div>
    <FaQuoteRight/>
  </main>;
}

export default App;
