import React, { useState } from 'react'
import "./FormInputs.css"

export const FormInputs = () => {
    const [objData, setObjData] = useState({})
    const getInputs = (name, value) => {
        let data = {[name]: value}
        setObjData({...objData, ...data});
    };

    const submit = () =>{
        console.log(objData);
    };

    console.log(objData);






  return (
    <div className='container'>
        <input type='text' name='name' placeholder='Enter Your name' onChange={(e) => getInputs(e.target.name, e.target.value)} />
        
        <input type='number' name='age' placeholder='Enter your age' onChange={(e) => getInputs(e.target.name, e.target.value)}/>
        
        <input type='text' name='email' placeholder='Enter your email' onChange={(e) => getInputs(e.target.name, e.target.value)}/>
        
        <input type='date' name='date' onChange={(e) => getInputs(e.target.name, e.target.value)}/>
        
        <button type='submit' onClick={submit}>Submit</button>
        

    </div>
  )
}
