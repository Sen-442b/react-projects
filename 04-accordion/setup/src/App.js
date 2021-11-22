import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  
 
  return<main>
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <section class="info">
    {
      data.map(item=>{
        return <SingleQuestion key={item.id} item={item}/>
      })
    }
    </section>

  </div>
   
  </main>;
}

export default App;
