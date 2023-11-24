import React from 'react';
import service1 from '../../assets/photos/sevice1.jpg'

const Services = () => {
    const servicefakeData = [
        {
            title: 'Marketing',
            description: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
        }, {
            title: 'Illustration',
            description: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
        },
        {
            title: 'Marketing Manager',
            description: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
        }, {
            title: 'Illustration Illusion',
            description: 'Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.'
        },
    ]
    return (
        <div >
            <h4 className='text-center text-lime-300 text-lg py-3'>WHAT WE DO</h4>
            <h1 className='text-center text-4xl mx-4 font-bold pb-8'>We’ve got everything you need to launch and grow your business</h1>
            <div className='grid md:grid-cols-2 mx-16 gap-14'>
                {
                    servicefakeData.map(service => <ServiceCard key={service.title} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

const ServiceCard = ({ service }) => {
    const { title, description } = service;
    return <>
        <div >
        
            <div className="hero md:min-h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg )' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-lime-400">{title}</h1>
                        <p className="mb-5 text-black text-lg font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-wide btn-outline btn-accent">read more...</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services;