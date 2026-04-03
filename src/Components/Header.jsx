import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is the head</h1>
            <nav className='flex gap-5'>
               <NavLink to={'/'}>Home</NavLink> 
               <NavLink to={'/mobiles'}>Mobiles</NavLink>
               <NavLink to={'/NewApp'}>New App</NavLink>
               <NavLink to={'/lap'}>Laptop</NavLink>
               <NavLink to={'/users'}>Users</NavLink>
               <NavLink to={'/users2'}>Users2</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;