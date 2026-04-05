import React from 'react';

const NormalForm = () => {
   const handlesubmit =e=>{
    e.preventDefault()
    const email =e.target.email.value 
    const password = e.target.password.value
    console.log(email , password);
    

   }


    return (
       <>
       
         <div className='container p-10 m-15'>
            <form  onSubmit={handlesubmit}>

                <input type="email" name="email" placeholder='write your mail' /><br />
                <input type="password" name="password" placeholder='write your password'/><br />
                <input type="submit" value="submit" className='btn' />
            </form>
            
         </div>
       
       </>
    );
};

export default NormalForm;