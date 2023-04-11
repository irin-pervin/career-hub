import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const informations = useLoaderData()
    return (
        <div>
            <h3>this is services :{informations.length}</h3>

            <div className="service-container">

            </div>
        </div>
    );
};

export default Services;