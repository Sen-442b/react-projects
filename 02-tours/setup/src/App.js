import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const API_URL = 'https://course-api.com/react-tours-project'

function App() {
  const [props,setProps] = useState([]);
  const [loading,setLoading]=useState(true);

  async function fetchData(){
    setLoading(true)
    try{
      
    const response = await fetch(API_URL)
    const data = await response.json()
    setProps( data)
    setLoading(false)
    console.log(data)
    }catch{
      setLoading(false)
      console.log("Bruh")
    }

    
  }

  let removeItem=(id)=>{
    let updatedItems= props.filter(item=>item.id!==id)
    setProps(updatedItems)

  }



  useEffect(()=>{
    
    fetchData()

  },[])
  if(loading){

    return <main><Loading/></main>
  }
  if(props.length===0){
    return<main>
      <div className="title">
        <h2>No Items Left </h2>
        <button className="btn" onClick={fetchData}>Reset</button>
      </div>
    </main>
  }
  return(<main>

     <Tours props={props} removeItem={removeItem}/>
     
     </main>)
}

export default App
