import React from 'react';
import service1 from '../../assets/photos/sevice1.jpg'
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const serviceData = useLoaderData();
    console.log(serviceData);
    
    return (
        <div >
            <h4 className='text-center text-lime-300 text-lg py-3'>WHAT WE DO</h4>
            <h1 className='text-center text-4xl mx-4 font-bold pb-8'>We’ve got everything you need to launch and grow your business</h1>
            <div className='grid md:grid-cols-2 mx-16 gap-14'>
                {
                    serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

const ServiceCard = ({ service }) => {
    const { serviceName, serviceDescription } = service;
    return <>
        <div >
        
            <div className="hero md:min-h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg )' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-lime-400">{serviceName}</h1>
                        <p className="mb-5 text-black text-lg font-semibold">{serviceDescription}</p>
                        <button className="btn btn-wide btn-outline btn-accent">read more...</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services;