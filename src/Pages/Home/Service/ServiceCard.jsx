import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='px-10 pt-10'><img src={img} alt="Shoes" className='rounded-xl' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-white">{title}</h2>
                <p className='font-bold text-orange-500'>Price : $ {price}</p>
                <div className="card-actions ">
                    <button className="btn bg-orange-500 font-bold text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;