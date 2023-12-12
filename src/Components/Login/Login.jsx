import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faHouse, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
library.add(faHouse, faLock);




const Login = () => {
    return (
        <section>
            <div class="flex items-center justify-center h-screen bg-white">
                <div className='h-96 w-80 bg-slate-950 opacity-80 shadow-xl rounded-lg shadow-slate-500 flex items-center justify-center '>
                    <div>
                        <button class="h-12 w-64 my-2 text-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded-md">
                            <FontAwesomeIcon className='h-6 mx-2' icon="fa-solid fa-lock" /> Go To Admin Panel
                        </button> <br />
                        <Link to='/'>
                            <button class=" h-12 w-64 my-2 text-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded-md">
                                <FontAwesomeIcon className='h-6 mx-2' icon="fa-solid fa-house" /> Go To Home Page
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Login;

