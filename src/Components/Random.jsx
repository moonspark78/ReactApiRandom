import React, { useState, useEffect } from 'react'
import "./Random.css";

export const Random = () => {
    const [random, setRandom] = useState([])
    
    const fetchData = () => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(json => setRandom(json.results[0]))
            .catch(error => console.error("Error fetching data:", error));
    }

    useEffect(() =>{
        fetchData()
    },[])





  return (
    <div className='container'>
        {random &&  random.picture && (
            <div className='photo'>
                <img alt='' src={random.picture.large}/>
            </div>
        )}
        {random && random.name && (
            <div className='info'>
                <h4>{random.name.first}</h4>
                <h4>{random.name.last}</h4>
                <p>{random.location.country}</p>
                <p>{random.email}</p>
                <p>{random.gender}</p>
            </div>
        )}
    </div>
  )
}
