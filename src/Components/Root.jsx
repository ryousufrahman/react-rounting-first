import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet>


            </Outlet>
            
        </div>
    );
};

export default Root;