import React from 'react'
import "./FormInputs.css"

export const FormInputs = () => {


    



  return (
    <div className='container'>
        <input type='text' name='name' placeholder='Enter Your name'/>
        
        <input type='number' name='age' placeholder='Enter your age'/>
        
        <input type='text' name='email' placeholder='Enter your email'/>
        
        <input type='date' name='date'/>
        
        <button type='submit'>Submit</button>
        

    </div>
  )
}
