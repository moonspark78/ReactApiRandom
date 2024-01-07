import React, { useState, useEffect } from 'react'

export const Random = () => {
    const [random, setRandom] = useState([])
    
    const fetchData = () => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then((json) => console.log(json.results[0]))
    }

    useEffect(() =>{
        fetchData()
    })





  return (
    <div className='container'>
        <div className='photo'>

        </div>
        <div className='info'>

        </div>
    </div>
  )
}
