import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faHouse, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
library.add(faHouse, faLock);

import { useNavigate } from 'react-router-dom';
import { authenticateAdmin } from '../../AdminCredit';
import { useState } from 'react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        

        // Authenticate admin
        if (authenticateAdmin(email, password)) {
            // If authenticated, navigate to admin panel
            navigate('/myadmin');
        } else {
            alert('Invalid credentials. Please try again.');
            setEmail('');
            setPassword('');

        }
    };

    return (
        <section>
            <div className="flex items-center justify-center h-screen bg-white mt-[-50px]">
                <div className='h-96 w-80 bg-gray-400 shadow-xl rounded-lg shadow-slate-500'>

                    <div className='h-64 py-12 mx-8'>
                        <form onSubmit={handleLogin}>
                            <input
                                className='text-center my-2 h-12 w-64 bg-gray-500 text-orange-400  text-xl font-bold outline-none'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                className='text-center my-2 h-12 w-64 bg-gray-500 text-white text-xl font-bold outline-none'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="h-12 w-64 mt-9 text-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded-md">
                                <FontAwesomeIcon className=' h-6 mx-2' icon="fa-solid fa-lock" /> Go To Admin Panel
                            </button>
                        </form>
                    </div>

                    <div>
                        <Link to='/'>
                            <button className="h-12 w-64 m-8 text-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded-md">
                                <FontAwesomeIcon className='animate-bounce h-6 mx-2' icon="fa-solid fa-house" /> Go To Home Page
                            </button>
                        </Link>
                    </div>

                </div>



            </div>






        </section>
    );
};

export default Login;

