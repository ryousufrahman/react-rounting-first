import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is the head</h1>
            <nav className='flex gap-5'>
               <Link to={'/'}>Home</Link> 
               <Link to={'/mobiles'}>Mobiles</Link>
               <Link to={'/NewApp'}>New App</Link>
               <Link to={'/lap'}>Laptop</Link>
               
            </nav>
        </div>
    );
};

export default Header;