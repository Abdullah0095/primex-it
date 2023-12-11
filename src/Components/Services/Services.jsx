import React from 'react';

import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const serviceData = useLoaderData();
    // console.log(serviceData);

    return (
        <div className='bg-white min-h-screen mt-[-50px]'>
            <h4 className='text-center text-black text-lg py-12'>WHAT WE DO</h4>
            <h1 className='text-center text-black text-4xl mx-4 font-bold pb-8'>We’ve got everything you need to launch and grow your business</h1>
            <div className='grid md:grid-cols-2 mx-16 gap-8'>

                {serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}

            </div>

        </div>
    );
};

const ServiceCard = ({ service }) => {
    const { serviceName, serviceDescription } = service;
    return <>
        <div>
            {/* style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg )' }} */}
            <div className="hero min-h-[350px] bg-slate-950 hover:m-0 hover:bg-slate-800 rounded" >
                {/* <div className="hero-overlay bg-opacity-50"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl text-white hover:text-black font-bold font-serif">{serviceName}</h1>
                        <p className="mb-5 font-mono  text-orange-600 hover:text-white text-lg font-semibold">{serviceDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services;