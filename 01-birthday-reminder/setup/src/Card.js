import React,{useState} from 'react'
import data from './data'




export default function Card() {
const [items, setItems] = useState(data)
 function toggleContentDisplay(){
     
     setItems([])


 }
    return (
        
        <main> 
            <section className="container">
            <h3>{items.length} birthdays today</h3>
           {
                items.map((user)=>{
                    const {id,name,age,image} = user
                
                     return(
                      <article className="person" key={id}>
                          <img src={image } alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                            </article > 
                        )
                       
                       
                   })
           }
           
            
        <button onClick={toggleContentDisplay}>Clear Items</button>
        </section>
        </main>

    )
}
