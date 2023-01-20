import React from 'react'
import { useState } from 'react'

function Monster() {

    const [dat,set]=useState([])

   function Mon (){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((data)=> {
    set(data)})
    
   }
  return (
    <div>
        <button onClick={Mon}>Click</button>
          {
            dat.map((item) =>{
                return<div key={item.id}>{item.name}</div>
            })
          }
        
    </div>
  )
}

export default Monster