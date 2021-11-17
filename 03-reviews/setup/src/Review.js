import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const usedIndex = new Set();
const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text}=people[index]
  function checkCurrentIndex(num){
    if(num>people.length-1){
      return 0
    }
    if(num<0){
      return people.length-1
    }
    return num

  }
  function getIncrementedIndex() {
    console.log(index);
    //index >= people.length - 1 ? setIndex(0) : setIndex(index + 1);
    setIndex(prevState=>{
      let modifiedIndex=prevState+1
      return checkCurrentIndex( modifiedIndex)
    })
  }
  function getDecrementedIndex() {
    console.log(index);
    //index <= 0 ? setIndex(people.length - 1) : setIndex(index - 1);
    setIndex(prevState=>{
      let modifiedIndex=prevState-1
      return checkCurrentIndex( modifiedIndex)
    })
  }
  function getRandomReview() {
    let randomIndex = Math.floor(Math.random() * people.length);
    while (usedIndex.has(randomIndex)) {
      randomIndex = Math.floor(Math.random() * people.length);

      if (usedIndex.size === people.length) {
        console.log(randomIndex)
        usedIndex.clear();
      }
    }
    setIndex(randomIndex);

    usedIndex.add(randomIndex);
    console.log(usedIndex);
 
  }

  return (
    <article className="review">
      <h2>{people[index].id}</h2>
      <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon"><FaQuoteRight/></span>
      </div>
      
      <h4 className="author">{name}</h4>
      <code className="job">{job}</code>
      <p>{text}</p>

      <div className="button-container">
        <button  onClick={getDecrementedIndex} className="prev-btn"><FaChevronLeft /></button>
     

        <button onClick={getIncrementedIndex} className="next-btn"><FaChevronRight /></button>
      </div>
      <button onClick={getRandomReview} className="random-btn">Random Review</button>
    </article>
  );
};

export default Review;
