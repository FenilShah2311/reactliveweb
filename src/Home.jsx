import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/nature.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your Business with' 
                imgsrc={web}
                 visit="/service" 
                btnname="Get Started"
            />
        </>
    )
}

export default Home;