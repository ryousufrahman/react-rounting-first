import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='m-10 border-2 border-amber-300 p-10 space-y-10'>
            <Header></Header>
            
            <div className='flex gap-5'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;