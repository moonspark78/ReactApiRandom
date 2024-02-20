import React, { useState } from 'react'

export const Compteur = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Compteur</h1><br/><br/><br/><br/><br/><br/>
        <h4>Count: {count}</h4><br/><br/>
        <button onClick={() => setCount(count +1)}>Incrémente</button><br/><br/>
        <button onClick={() => setCount(count -1)}>Décrémente</button>
    </div>
  )
}
