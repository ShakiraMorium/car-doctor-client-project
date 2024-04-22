import React from 'react';

import about1 from '../../../assets/about/person.jpg';
import about2 from '../../../assets/about/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={about1} className="w-3/4 h-80 rounded-lg shadow-2xl" />
                <img src={about2} className="w-2/3 absolute right-3 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4 mt-5'>
                    <h4 className="text-3xl font-bold text-orange-500 top-5">ABOUT US</h4>
                    <h1 className='text-5xl font-bold'>We are qualified & of experience in this feild</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-orange-500 text-white">GET MORE INFO</button>
                </div>
            </div>
        </div>
    );
};

export default About;