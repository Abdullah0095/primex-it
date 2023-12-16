import React from 'react';
import { Link } from 'react-router-dom';

import Marekting from '../../marketing.json';
import Lottie from 'lottie-react';


const HomePageBanner = () => {
    return (
        <div className="bg-black min-h-screen mt-[-50px] flex justify-center items-center">
            <div>
                <div className='animate-charcter mx-16 text-3xl md:text-5xl font-bold'>
                    Unlock Your <br />
                    Online Growth <br />
                    potential
                </div>
                <div>
                    <Link to='/service'><button className="btn btn-outline btn-success mx-16 my-8">Check our services</button></Link>
                </div>
            </div>
            <div>
                <Lottie animationData={Marekting} />
            </div>

        </div>

    );
};

export default HomePageBanner;