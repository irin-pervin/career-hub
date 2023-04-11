import React from 'react';
import image from '../../assets/abc.avif';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="title">
                        How to Overcome Challenges
                        <span> your Career</span>
                    </div>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <button className='btn-apply'>Get Started</button>
                </div>
                <div className="banner-thumbnail">
                    <img src={image} alt="bana" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;