import React from 'react';

const ActionForm = () => {
    
    const handleAction =(FormData)=>{
        console.log(FormData.get('email' ));
        console.log(FormData.get('password'));
        
        
    }
    return (
        <>
          <div className='container mx-auto mx-w-100'>

            <form action={handleAction}>
             <input type="email" name="email" placeholder='email'/><br />
             <input type="password" name="password"  placeholder='password' /><br />
             <input type="submit" value="submit" className='btn' />



            </form>
          </div>
        
        </>
    );
};

export default ActionForm;