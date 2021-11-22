import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
  const [currCategory,setCurrCategory]=useState("all")
  
  return <main>
    <section className="menu-section">
    <div className="title" >
     <h2> Our Menu </h2>
     <div className="underline"></div>
      </div>
      <Categories setCurrCategory={setCurrCategory}/>
      <div className="section-center">
    {
    
      items.map(item => {
        const {category,id}=item
        if(category===currCategory){
          console.log("bruh")
          console.log(category)
          console.log(currCategory)
         return  <Menu key={id} item={item} />
          
        }
        if(currCategory==="all"){
          return  <Menu key={id} item={item} />
          

        }

      })
    }
    </div>
    </section>
  </main>;
}

export default App;
