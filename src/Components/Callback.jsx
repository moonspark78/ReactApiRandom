import React, { useState } from 'react'
import "./style.css"

export const Callback = ({changeColor}) => {
    const [search, setSearch] = useState("")

    const handleInputChange = (e) =>{
        const color = e.target.value;
        setSearch(color);
        changeColor(color);
    };



  return (
    <div>
        <input  
            placeholder="Enter text here" 
            className="input-style" 
            type="text"
            value={search}
            onChange={handleInputChange}
        />
    </div>
  )
}
