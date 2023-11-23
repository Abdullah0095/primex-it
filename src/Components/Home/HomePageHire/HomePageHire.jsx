import React from 'react';

const HomePageHire = () => {
    const hireCategories = [
        {
            title : "Design",
            description: "Our web design team has ample years of experience in the core areas of design to build a website that you need."
        },
        {
            title: "Development",
            description : "Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose."
        },
        {
            title: "Marketing",
            description : "With researched digital marketing, we will ensure that new customers and clients are able to find your business."
        }
    ]
    return (
        <div className='bg-orange-100 text-black'>
            <div className='m-10 pt-10'>
                <h1 className='font-semibold font-serif text-2xl'>Hire Us For</h1>
            </div>
            <div>
                {
                    hireCategories.map(hireCategory => <HireCategoryDetails key={hireCategory.title} hireCategory={hireCategory}></HireCategoryDetails>)
                }
            </div>
        </div>
    );
};

const HireCategoryDetails = ({hireCategory}) => {
    const {title, description} = hireCategory;
    return(
        <div className='m-10'>
            <h4 className='text-lg font-serif font-bold'>{title}</h4>
            <p className='py-4'>{description}</p>
        </div>
    )
}

export default HomePageHire;