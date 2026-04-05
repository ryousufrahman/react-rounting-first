import React, { useState } from 'react';

const Controllod = () => {
    const [error , setError] = useState('')
    const [onchangeText , setOnchangeText] =useState('')
    const handlechange = e =>{
       setOnchangeText(e.target.value)
       if(onchangeText.length <8){
        setError('must assing 8 character')
       }
       else{
        setError('')
       }
       
       

    }


    const handleSubmit = e =>{
        e.preventDefault()
    }


    return (
        <>
         <form onSubmit={handleSubmit} >

            <input type="text" name="name" placeholder='write your name' /> <br />
            <input type="password" name="password" placeholder='type your password' onChange={handlechange} defaultValue={onchangeText} /><br />
            <input type="submit" value="submit"  className='btn'/>
            <p className='text-red-500'>{error}</p>

         </form>
        
        </>
    );
};

export default Controllod;