import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    const teamData = [
        {
            id: '1',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: '2',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: '3',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: '4',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: '5',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            id: '6',
            name: 'Abdullah al Mizan',
            image: 'https://i.ibb.co/VLJhbR2/cat.jpg',
            designation: 'Hitman Agent',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },

    ]

    return (
        <div className='bg-white'>
            <section>
                <div className='text-center p-28 bg-teal-600 mt-[-110px]'>
                    <h1 className='text-white font-bold text-6xl'>About us</h1>
                    <p className='py-3 text-black text-lg'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <Link to='/contact'><button className="btn btn-success animate-bounce w-40 mt-8 text-white text-lg">GET IN TOUCH</button></Link>
                </div>
            </section>

            <section>
                <div className='grid md:grid-cols-2 py-32'>
                    <div className='grid justify-items-end px-4 md:pl-4'>

                        <img className='h-[450px] ' src="https://i.ibb.co/rMCKqw6/ssmAbout.jpg" alt="ssmAbout" border="0" />
                    </div>
                    <div className='m-4 md:py-12'>
                        <h1 className="text-5xl text-green-700 font-bold">Why Us!</h1>
                        <p className="py-6 text-black text-lg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <Link to='/contact'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h1 className='text-5xl text-emerald-900 text-center font-bold pb-12'>Team</h1>
                </div>

                <div className='grid md:grid-cols-3'>
                    {
                        teamData.map(member => <MemberCard key={member.id} member={member}></MemberCard>)
                    }
                </div>
            </section>
        </div>
    );
};

const MemberCard = ({ member }) => {
    const { description, name, image, designation } = member;
    return (
        <div className="hero md:min-h-[400px] m-2">
            <div className="card min-h-[300px] max-h-fit w-96 shadow-xl bg-slate-950 text-white hover:text-teal-400">
                <div className="card-body">
                    <p className='font-mono text-lg'>{description}</p>
                    <div className='grid grid-cols-2 mt-3'>
                        <div><img className='h-32 rounded-full' src={image} alt="" /></div>
                        <div className='mt-6'>
                            <h2 className="text-lg">{name}</h2>
                            <h2 className="">{designation}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;