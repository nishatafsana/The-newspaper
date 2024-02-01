import React from 'react';
import NavigationBar from '../pages/Shared/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLayOut = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogInLayOut;