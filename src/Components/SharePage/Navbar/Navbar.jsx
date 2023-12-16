import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { Link } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

const Navbar = () => {
    const navList = <>

        <Link className='px-5' to='/'>Home</Link>
        <Link className='px-5' to='/service'>Services</Link>
        <Link className='px-5' to='/blog'>Blogs</Link>
        <Link className='px-5' to='/about'>About Us</Link>
        <Link className='px-5' to='/contact'>Contact</Link>
        {/* <Link className='px-5' to='/admin'>Admin</Link> */}
        {/* <Link className='px-5' to='/login'>Login</Link> */}

    </>
    return (
        <div className='sticky top-0'>
            <div className="drawer ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* ui content here */}
                    <label htmlFor="my-drawer" className=" w-12 text-lg bg-currant btn btn-outline btn-accept drawer-button">
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 min-h-full bg-base-100 text-white text-xl font-semibold">
                        {/* Sidebar content here */}
                        <li>{navList}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;