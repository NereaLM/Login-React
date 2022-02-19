import React, { useState } from 'react'

export default function Formulario() { 

    const [fullName, setFullName] = useState({
       name: "",
       lastName: "" 
    });

    const handleChange = (e) => {
      
        const {name, value} = e.target;

        setFullName((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
       

    }
    const submitForm = (e) => {
        e.preventDefault();     

    }

    const {name, lastName} = fullName; 



  return (
    <div>
    <h1 className='name-container'>Hola {name} {lastName}</h1>
    <form onSubmit={submitForm}>
        <input className='firstName'
        value={name} 
        name= "name"
        onChange={handleChange} 
        placeholder="Nombre"
        />

        <input className='lastName'
        value={lastName} 
        name= "lastName"
        onChange={handleChange} 
        placeholder="Apellido"
        />

        <button className='login-container'>Login</button>
    </form>
    </div>
  )
}
