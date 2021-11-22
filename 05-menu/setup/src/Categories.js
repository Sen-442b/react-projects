import React from 'react';
import data from "./data.js"

const Categories = ({setCurrCategory}) => {
const filteredCatagories = data.map(item=>item.category)
const catSet = new Set(filteredCatagories)
console.log(catSet)
  return <div className="btn-container">
    <button onClick={()=>setCurrCategory("all")} className="filter-btn">All</button>
    {
      [...catSet].map(item=>{
        return   <button onClick={()=>setCurrCategory(item)} className="filter-btn">{item.charAt(0).toUpperCase()+item.substr(1)}</button>
      })
    }
  </div>;

};

export default Categories;
