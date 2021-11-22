import React from 'react'

export default function Companies({fetchedData,itemClickHandler}) {
    const filteredCompanies= [...new Set(fetchedData.map(item=>item.company))]
    console.log(filteredCompanies)
    return (
        <div className="comp">
            {
                filteredCompanies.map((item,index)=>{
                    return <div className="comp-data"  key={index} onClick={()=>itemClickHandler(item)}>{item}</div>
                })
            }
            
            
        </div>
    )
}
