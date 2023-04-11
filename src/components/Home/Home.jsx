import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const informations = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;