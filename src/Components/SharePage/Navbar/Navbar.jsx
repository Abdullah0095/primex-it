import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navList = <>

        <Link className='px-5' to='/'>Home</Link>
        <Link className='px-5' to='/service'>Services</Link>
        <Link className='px-5' to='/'>testimonial</Link>
        <Link className='px-5' to='/'>Blogs</Link>
        <Link className='px-5' to='/about'>About Us</Link>
        <Link className='px-5' to='/contact'>Contact</Link>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">PrimeX IT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='text-2xl py-5'>
                            {navList}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent m-5">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;